include $(ROOT_DIR)/make/core/help/variable.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

.PHONY: help-docker-build help-docker-run
help-docker-build:
	@echo [Docker Build] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,DOCKER_BUILD)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make d-build-base                  $(HELP_PIPE)    Build the dependency image
	@echo   make d-build-dev                   $(HELP_PIPE)    Build the development image
	@echo   make d-build-validation            $(HELP_PIPE)    Build and execute the validation stage
	@echo   make d-build-prod                  $(HELP_PIPE)    Build the Nginx production-preview image
	@echo   make d-build-all                   $(HELP_PIPE)    Build every local image target
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

help-docker-run:
	@echo [Docker Run] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,DOCKER_RUN)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make d-run-dev                     $(HELP_PIPE)    Start development at localhost:$(DOCKER_DEV_PORT)
	@echo   make d-run-prod                    $(HELP_PIPE)    Start production preview at localhost:$(DOCKER_PROD_PORT)
	@echo   make d-shell-dev                   $(HELP_PIPE)    Open a shell in the development image
	@echo   make d-test                        $(HELP_PIPE)    Run tests in the development image
	@echo   make d-typecheck                   $(HELP_PIPE)    Run type checking in the development image
	@echo   make d-check                       $(HELP_PIPE)    Run complete validation in the development image
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

