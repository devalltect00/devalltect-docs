include $(ROOT_DIR)/make/core/help/variable.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

.PHONY: help-cleanup-project help-cleanup-docker
help-cleanup-project:
	@echo [Project Cleanup] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,PROJECT_CLEANUP)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make clean-cache                    $(HELP_PIPE)    Remove generated cache directories
	@echo   make clean-build                    $(HELP_PIPE)    Remove generated site and report output
	@echo   make clean                          $(HELP_PIPE)    Remove normal generated output
	@echo   make clean-all                      $(HELP_PIPE)    Also remove local dependencies
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

help-cleanup-docker:
	@echo [Docker Cleanup] $(HELP_LPAREN)Total: $(call COMMAND_COUNT,DOCKER_CLEANUP)$(HELP_RPAREN)
	@echo $(HELP_SEPARATOR)
	@echo   make d-remove-images                $(HELP_PIPE)    Remove local project images
	@echo   make d-remove-volumes               $(HELP_PIPE)    Remove project Compose resources and volume
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

