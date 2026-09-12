include $(ROOT_DIR)/make/core/help/variable.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

.PHONY: help-documentation
help-documentation:
	@echo [Documentation] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,DOCUMENTATION)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make docs-build                    $(HELP_PIPE)    Build every configured locale
	@echo   make docs-serve                    $(HELP_PIPE)    Serve the generated production build
	@echo   make docs-clear                    $(HELP_PIPE)    Clear Docusaurus-generated state
	@echo   make docs-rebuild                  $(HELP_PIPE)    Clear and rebuild the portal
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

