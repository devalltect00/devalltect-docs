include $(ROOT_DIR)/make/core/helpers/common.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

FORMAT_COMMANDS_LIST := format format-check
$(foreach cmd,$(FORMAT_COMMANDS_LIST),$(eval $(call REGISTER_COMMAND,LINT_FORMAT,$(cmd),LOCAL)))

.PHONY: format format-check
format: check-yarn
	$(YARN) format

format-check: check-yarn
	$(YARN) format:check

