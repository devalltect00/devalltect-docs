include $(ROOT_DIR)/make/core/helpers/common.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

COMPOSE_BUILD_COMMANDS_LIST := c-build-base c-build-dev c-build-prod c-build-all c-config c-config-dev c-config-prod
$(foreach cmd,$(COMPOSE_BUILD_COMMANDS_LIST),$(eval $(call REGISTER_COMMAND,COMPOSE_BUILD,$(cmd),COMPOSE)))

.PHONY: c-build-base c-build-dev c-build-prod c-build-all c-config c-config-dev c-config-prod
c-build-base: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_BASE) build base

c-build-dev: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) build app

c-build-prod: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_PROD) build app

c-build-all: c-build-base c-build-dev c-build-prod

c-config: c-config-dev c-config-prod

c-config-dev: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) config --quiet

c-config-prod: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_PROD) config --quiet

