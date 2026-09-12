include $(ROOT_DIR)/make/core/helpers/common.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

DOCUMENTATION_COMMANDS_LIST := docs-build docs-serve docs-clear docs-rebuild
$(foreach cmd,$(DOCUMENTATION_COMMANDS_LIST),$(eval $(call REGISTER_COMMAND,DOCUMENTATION,$(cmd),LOCAL)))

.PHONY: docs-build docs-serve docs-clear docs-rebuild
docs-build: check-yarn
	$(YARN) build

docs-serve: check-yarn
	$(YARN) serve

docs-clear: check-yarn
	$(YARN) clear

docs-rebuild: docs-clear docs-build

