include $(ROOT_DIR)/make/core/helpers/registry.mk

$(eval $(call REGISTER_COMMAND,CI,ci,LOCAL))
$(eval $(call REGISTER_COMMAND,CI,c-ci,COMPOSE))

.PHONY: ci c-ci
ci: check

c-ci: c-check
