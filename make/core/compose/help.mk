include $(ROOT_DIR)/make/core/help/variable.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

.PHONY: help-compose-build help-compose-run
help-compose-build:
	@echo [Docker Compose Build $(HELP_AMP) Configuration] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,COMPOSE_BUILD)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make c-build-base                  $(HELP_PIPE)    Build the shared dependency service
	@echo   make c-build-dev                   $(HELP_PIPE)    Build the development service
	@echo   make c-build-prod                  $(HELP_PIPE)    Build the production-preview service
	@echo   make c-build-all                   $(HELP_PIPE)    Build base, development, and production services
	@echo   make c-config                      $(HELP_PIPE)    Validate every Compose configuration
	@echo   make c-config-dev                  $(HELP_PIPE)    Validate development Compose configuration
	@echo   make c-config-prod                 $(HELP_PIPE)    Validate production Compose configuration
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

help-compose-run:
	@echo [Docker Compose Run] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,COMPOSE_RUN)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make c-run-dev                     $(HELP_PIPE)    Start the development service
	@echo   make c-run-prod                    $(HELP_PIPE)    Start the production-preview service
	@echo   make c-shell-dev                   $(HELP_PIPE)    Open a development shell
	@echo   make c-test                        $(HELP_PIPE)    Run tests through Compose
	@echo   make c-typecheck                   $(HELP_PIPE)    Run type checking through Compose
	@echo   make c-format-check                $(HELP_PIPE)    Check formatting through Compose
	@echo   make c-docs-build                  $(HELP_PIPE)    Build both locales through Compose
	@echo   make c-check                       $(HELP_PIPE)    Run complete validation through Compose
	@echo   make c-down-dev                    $(HELP_PIPE)    Stop development services
	@echo   make c-down-prod                   $(HELP_PIPE)    Stop production-preview services
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

