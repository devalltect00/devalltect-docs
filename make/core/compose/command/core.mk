include $(ROOT_DIR)/make/core/helpers/common.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

COMPOSE_RUN_COMMANDS_LIST := c-run-dev c-run-prod c-shell-dev c-test c-typecheck c-format-check c-docs-build c-check c-down-dev c-down-prod
$(foreach cmd,$(COMPOSE_RUN_COMMANDS_LIST),$(eval $(call REGISTER_COMMAND,COMPOSE_RUN,$(cmd),COMPOSE)))

.PHONY: c-run-dev c-run-prod c-shell-dev c-test c-typecheck c-format-check c-docs-build c-check c-down-dev c-down-prod
c-run-dev: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) up app

c-run-prod: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_PROD) up app

c-shell-dev: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) run --rm shell

c-test: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) run --rm test

c-typecheck: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) run --rm typecheck

c-format-check: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) run --rm format-check

c-docs-build: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) run --rm build

c-check: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) run --rm check

c-down-dev: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) down

c-down-prod: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_PROD) down

