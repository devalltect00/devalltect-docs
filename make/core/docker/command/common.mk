include $(ROOT_DIR)/make/core/helpers/common.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

DOCKER_BUILD_COMMANDS_LIST := d-build-base d-build-dev d-build-validation d-build-prod d-build-all
$(foreach cmd,$(DOCKER_BUILD_COMMANDS_LIST),$(eval $(call REGISTER_COMMAND,DOCKER_BUILD,$(cmd),DOCKER)))

.PHONY: d-build-base d-build-dev d-build-validation d-build-prod d-build-all
d-build-base: docker-check
	$(DOCKER) build --target dependencies -t $(DOCKER_IMAGE_BASE) -f $(DOCKERFILE) .

d-build-dev: docker-check
	$(DOCKER) build --target development -t $(DOCKER_IMAGE_DEV) -f $(DOCKERFILE) .

d-build-validation: docker-check
	$(DOCKER) build --target validation -t $(PROJECT_SLUG)-validation:$(DOCKER_TAG) -f $(DOCKERFILE) .

d-build-prod: docker-check
	$(DOCKER) build --target production -t $(DOCKER_IMAGE_PROD) -f $(DOCKERFILE) .

d-build-all: d-build-base d-build-dev d-build-validation d-build-prod

