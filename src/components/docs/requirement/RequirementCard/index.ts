/**
 * ============================================================================
 * RequirementCard
 * ============================================================================
 */

export { default } from "./RequirementCard";

export type {
    RequirementCardProps,
    RequirementLevel,
} from "./types";


/** Example Usage
 * 
<Docs.RequirementCard
    title="Git"
    level="required"
    icon={<Docs.Icon name="git" />}
>

    <p>

        Git must be installed and available from the
        system PATH before running release workflows.

    </p>

</Docs.RequirementCard>

<Docs.RequirementCard
    title="Docker"
    level="recommended"
    icon={<Docs.Icon name="docker" />}
>

    <p>

        Docker is recommended when running Custy
        inside containers or using Docker Compose.

    </p>

</Docs.RequirementCard>

<Docs.RequirementCard
    title="Internet Connection"
    level="optional"
    icon={<Docs.Icon name="network" />}
>

    <p>

        Required only when pushing to remote
        repositories.

    </p>

</Docs.RequirementCard>
 */