include $(ROOT_DIR)/make/core/helpers/common.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

QA_COMMANDS_LIST := check qa
$(foreach cmd,$(QA_COMMANDS_LIST),$(eval $(call REGISTER_COMMAND,QA,$(cmd),LOCAL)))

.PHONY: check qa
check: check-yarn
	$(YARN) validate

qa: format check

