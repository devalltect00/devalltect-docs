include $(ROOT_DIR)/make/core/helpers/common.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

DOCKER_RUN_COMMANDS_LIST := d-run-dev d-run-prod d-shell-dev d-test d-typecheck d-check
$(foreach cmd,$(DOCKER_RUN_COMMANDS_LIST),$(eval $(call REGISTER_COMMAND,DOCKER_RUN,$(cmd),DOCKER)))

.PHONY: d-run-dev d-run-prod d-shell-dev d-test d-typecheck d-check
d-run-dev: docker-check
	$(DOCKER) run --rm -it -p $(DOCKER_DEV_PORT):3000 -v "$(CURDIR):/workspace" -v $(PROJECT_SLUG)-node-modules:/workspace/node_modules $(DOCKER_IMAGE_DEV)

d-run-prod: docker-check
	$(DOCKER) run --rm -it -p $(DOCKER_PROD_PORT):8080 $(DOCKER_IMAGE_PROD)

d-shell-dev: docker-check
	$(DOCKER) run --rm -it --entrypoint sh -v "$(CURDIR):/workspace" -v $(PROJECT_SLUG)-node-modules:/workspace/node_modules $(DOCKER_IMAGE_DEV)

d-test: docker-check
	$(DOCKER) run --rm -v "$(CURDIR):/workspace" -v $(PROJECT_SLUG)-node-modules:/workspace/node_modules $(DOCKER_IMAGE_DEV) yarn test

d-typecheck: docker-check
	$(DOCKER) run --rm -v "$(CURDIR):/workspace" -v $(PROJECT_SLUG)-node-modules:/workspace/node_modules $(DOCKER_IMAGE_DEV) yarn typecheck

d-check: docker-check
	$(DOCKER) run --rm -v "$(CURDIR):/workspace" -v $(PROJECT_SLUG)-node-modules:/workspace/node_modules $(DOCKER_IMAGE_DEV) yarn validate

