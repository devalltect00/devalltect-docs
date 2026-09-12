include $(ROOT_DIR)/make/core/help/variable.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

.PHONY: help-lint-format
help-lint-format:
	@echo [Format] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,LINT_FORMAT)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make format                        $(HELP_PIPE)    Format supported repository files with Prettier
	@echo   make format-check                  $(HELP_PIPE)    Check formatting without modifying files
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

