include $(ROOT_DIR)/make/core/helpers/common.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

LOCAL_COMMANDS_LIST := start start-id
$(foreach cmd,$(LOCAL_COMMANDS_LIST),$(eval $(call REGISTER_COMMAND,LOCAL_RUN,$(cmd),LOCAL)))

.PHONY: start start-id
start: check-yarn
	$(YARN) start

start-id: check-yarn
	$(YARN) start --locale id

