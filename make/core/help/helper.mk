include $(ROOT_DIR)/make/core/help/variable.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

.PHONY: help-header help-footer help-help
help-header:
	$(HELP_BLANK)
	@echo =========================================================
	@echo  $(APP_NAME) - Available Commands
	@echo =========================================================
	$(HELP_BLANK)

help-footer:
ifeq ($(GROUP),ALL)
	@echo Total Commands: $(call COMMAND_COUNT,ALL)
else
	@echo Commands in $(GROUP_DISPLAY_$(GROUP)): $(call COMMAND_COUNT,$(GROUP))
endif
	$(HELP_BLANK)
	@echo =========================================================

help-help:
	@echo [Help] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,HELP)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make help                          $(HELP_PIPE)    Show every available command
	@echo   make help-local                    $(HELP_PIPE)    Show local development commands
	@echo   make help-docker                   $(HELP_PIPE)    Show direct Docker commands
	@echo   make help-compose                  $(HELP_PIPE)    Show Docker Compose commands
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)
