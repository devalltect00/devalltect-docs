include $(ROOT_DIR)/make/core/help/variable.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

.PHONY: help-setup-installation
help-setup-installation:
	@echo [Setup $(HELP_AMP) Installation] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,SETUP)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make install                       $(HELP_PIPE)    Install the immutable Yarn dependency graph
	@echo   make install-clean                 $(HELP_PIPE)    Reinstall dependencies from a clean local state
	@echo   make upgrade                       $(HELP_PIPE)    Review and update dependency resolutions
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

