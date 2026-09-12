include $(ROOT_DIR)/make/core/help/variable.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

.PHONY: help-ci
help-ci:
	@echo [CI Validation] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,CI)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make ci                            $(HELP_PIPE)    Run the local CI-equivalent validation
	@echo   make c-ci                          $(HELP_PIPE)    Run validation through Docker Compose
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

