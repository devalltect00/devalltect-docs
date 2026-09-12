include $(ROOT_DIR)/make/core/help/variable.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

HELP_COMMANDS_LIST := help help-local help-docker help-compose
$(foreach cmd,$(HELP_COMMANDS_LIST),$(eval $(call REGISTER_COMMAND,HELP,$(cmd))))

include $(ROOT_DIR)/make/core/help/helper.mk
include $(ROOT_DIR)/make/core/setup_install/help.mk
include $(ROOT_DIR)/make/core/local/help.mk
include $(ROOT_DIR)/make/core/testing/help.mk
include $(ROOT_DIR)/make/core/lint_format/help.mk
include $(ROOT_DIR)/make/core/documentation/help.mk
include $(ROOT_DIR)/make/core/qa/help.mk
include $(ROOT_DIR)/make/core/ci/help.mk
include $(ROOT_DIR)/make/core/docker/help.mk
include $(ROOT_DIR)/make/core/compose/help.mk
include $(ROOT_DIR)/make/core/cleanup/help.mk
include $(ROOT_DIR)/make/core/variables/help.mk

define HELP_WRAPPER
	@$(MAKE) --no-print-directory help-header
	@$(MAKE) --no-print-directory help-help
	$(1)
	@$(MAKE) --no-print-directory help-variables
	@$(MAKE) --no-print-directory help-footer GROUP=$(2)
endef

define HELP_CONTENT_LOCAL
	@$(MAKE) --no-print-directory help-setup-installation
	@$(MAKE) --no-print-directory help-local-run
	@$(MAKE) --no-print-directory help-testing
	@$(MAKE) --no-print-directory help-lint-format
	@$(MAKE) --no-print-directory help-documentation
	@$(MAKE) --no-print-directory help-quality-assurance
	@$(MAKE) --no-print-directory help-ci
	@$(MAKE) --no-print-directory help-cleanup-project
endef

define HELP_CONTENT_DOCKER
	@$(MAKE) --no-print-directory help-docker-build
	@$(MAKE) --no-print-directory help-docker-run
	@$(MAKE) --no-print-directory help-cleanup-docker
endef

define HELP_CONTENT_COMPOSE
	@$(MAKE) --no-print-directory help-compose-build
	@$(MAKE) --no-print-directory help-compose-run
	@$(MAKE) --no-print-directory help-cleanup-docker
endef

define HELP_CONTENT_ALL
	$(HELP_CONTENT_LOCAL)
	$(HELP_CONTENT_DOCKER)
	$(HELP_CONTENT_COMPOSE)
endef

.PHONY: help help-local help-docker help-compose
help:
	$(call HELP_WRAPPER,$(HELP_CONTENT_ALL),ALL)

help-local:
	$(call HELP_WRAPPER,$(HELP_CONTENT_LOCAL),LOCAL)

help-docker:
	$(call HELP_WRAPPER,$(HELP_CONTENT_DOCKER),DOCKER)

help-compose:
	$(call HELP_WRAPPER,$(HELP_CONTENT_COMPOSE),COMPOSE)

