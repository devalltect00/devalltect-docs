include $(ROOT_DIR)/make/core/help/variable.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

.PHONY: help-quality-assurance
help-quality-assurance:
	@echo [Quality Assurance] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,QA)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make check                         $(HELP_PIPE)    Run non-mutating release validation
	@echo   make qa                            $(HELP_PIPE)    Format, then run release validation
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

