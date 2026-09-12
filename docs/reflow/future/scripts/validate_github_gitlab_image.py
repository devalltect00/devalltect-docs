from __future__ import annotations

import re
from urllib.parse import urlparse

import requests

IMAGE_REFERENCE_PATTERN = re.compile(
    r"^(?P<registry>[a-zA-Z0-9.-]+(?::[0-9]+)?)/"
    r"(?P<repository>[a-z0-9._/-]+)"
    r"(?::(?P<tag>[a-zA-Z0-9._-]+))?$"
)


def is_valid_image_reference(image: str) -> bool:
    """
    Validate container image reference syntax.

    Examples:
        ghcr.io/my-org/my-image
        ghcr.io/my-org/my-image:latest
        registry.gitlab.com/group/project/image:v1
    """
    return bool(IMAGE_REFERENCE_PATTERN.fullmatch(image))


def get_registry_host(image: str) -> str | None:
    """
    Extract registry hostname.

    Example:
        ghcr.io/my-org/my-image
        -> ghcr.io
    """
    match = IMAGE_REFERENCE_PATTERN.fullmatch(image)

    if not match:
        return None

    return match.group("registry")


def is_registry_reachable(
    registry: str,
    timeout: int = 10,
) -> bool:
    """
    Check whether registry responds.

    Example:
        ghcr.io
        registry.gitlab.com
    """

    try:
        response = requests.get(
            f"https://{registry}/v2/",
            timeout=timeout,
        )

        return response.status_code in {
            200,
            401,
        }

    except requests.RequestException:
        return False


def image_exists(
    image: str,
    timeout: int = 10,
) -> bool:
    """
    Check whether image repository exists.

    Works best for public images.

    Returns False for:
        - non-existing image
        - inaccessible private image
        - invalid image format
    """

    match = IMAGE_REFERENCE_PATTERN.fullmatch(image)

    if not match:
        return False

    registry = match.group("registry")
    repository = match.group("repository")
    tag = match.group("tag") or "latest"

    url = (
        f"https://{registry}/v2/"
        f"{repository}/manifests/{tag}"
    )

    headers = {
        "Accept": (
            "application/vnd.docker.distribution.manifest.v2+json"
        )
    }

    try:
        response = requests.head(
            url,
            headers=headers,
            timeout=timeout,
        )

        return response.status_code in {
            200,
            401,
        }

    except requests.RequestException:
        return False

##### Usage

image = "ghcr.io/actions/actions-runner"

if not is_valid_image_reference(image):
    print("Invalid image reference")
    raise SystemExit(1)

registry = get_registry_host(image)

if registry is None:
    raise SystemExit(1)

if not is_registry_reachable(registry):
    print("Registry unreachable")
    raise SystemExit(1)

if image_exists(image):
    print("Image exists")
else:
    print("Image not found or private")

#####

import subprocess


def image_exists_via_docker(image: str) -> bool:
    try:
        subprocess.run(
            [
                "docker",
                "manifest",
                "inspect",
                image,
            ],
            check=True,
            capture_output=True,
            text=True,
        )

        return True

    except (
        subprocess.CalledProcessError,
        FileNotFoundError,
    ):
        return False
