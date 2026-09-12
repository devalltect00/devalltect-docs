include $(ROOT_DIR)/make/core/helpers/common.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

SETUP_COMMANDS_LIST := install install-clean upgrade
$(foreach cmd,$(SETUP_COMMANDS_LIST),$(eval $(call REGISTER_COMMAND,SETUP,$(cmd),LOCAL)))

.PHONY: install install-clean upgrade
install: check-yarn
	$(YARN) install --immutable

install-clean: check-yarn
	$(NODE) -e "const fs=require('fs'); for (const p of ['node_modules','.yarn/install-state.gz']) fs.rmSync(p,{recursive:true,force:true});"
	$(YARN) install --immutable

upgrade: check-yarn
	$(YARN) up

