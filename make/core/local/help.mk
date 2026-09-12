include $(ROOT_DIR)/make/core/help/variable.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

.PHONY: help-local-run
help-local-run:
	@echo [Local Development] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,LOCAL_RUN)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make start                         $(HELP_PIPE)    Start the English development server
	@echo   make start-id                      $(HELP_PIPE)    Start the Indonesian development server
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

