include $(ROOT_DIR)/make/core/helpers/common.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

TESTING_COMMANDS_LIST := test test-freshness typecheck
$(foreach cmd,$(TESTING_COMMANDS_LIST),$(eval $(call REGISTER_COMMAND,TESTING,$(cmd),LOCAL)))

.PHONY: test test-freshness typecheck
test: check-yarn
	$(YARN) test

test-freshness: check-yarn
	$(YARN) test:documentation-freshness

typecheck: check-yarn
	$(YARN) typecheck

