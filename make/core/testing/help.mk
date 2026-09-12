include $(ROOT_DIR)/make/core/help/variable.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

.PHONY: help-testing
help-testing:
	@echo [Testing $(HELP_AMP) Type Safety] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,TESTING)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make test                          $(HELP_PIPE)    Run the portal test suite
	@echo   make test-freshness                $(HELP_PIPE)    Run documentation-freshness tests
	@echo   make typecheck                     $(HELP_PIPE)    Validate TypeScript types
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

