include $(ROOT_DIR)/make/core/help/variable.mk

.PHONY: help-variables
help-variables:
	@echo [Common Variables]
	@echo $(HELP_SEPARATOR)
	@echo   NODE=$(HELP_LT)command$(HELP_GT)                  $(HELP_PIPE)    Node.js executable
	@echo   DOCKER_TAG=$(HELP_LT)tag$(HELP_GT)                $(HELP_PIPE)    Local Docker image tag
	@echo   DOCKER_DEV_PORT=$(HELP_LT)port$(HELP_GT)          $(HELP_PIPE)    Development host port
	@echo   DOCKER_PROD_PORT=$(HELP_LT)port$(HELP_GT)         $(HELP_PIPE)    Production-preview host port
	@echo $(HELP_SEPARATOR)
	$(HELP_BLANK)

