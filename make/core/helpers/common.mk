ifndef DEVALLTECT_DOCS_COMMON_INCLUDED
DEVALLTECT_DOCS_COMMON_INCLUDED := 1

include $(ROOT_DIR)/make/core/variables/variable.mk

# =========================================================
# 🛠️ VALIDATION HELPERS
# =========================================================

define REQUIRE_NODE
	@$(NODE) --version >$(NULL_DEVICE) 2>&1 || (echo Node.js is not installed. && exit 1)
endef

define REQUIRE_YARN
	@$(YARN) --version >$(NULL_DEVICE) 2>&1 || (echo The pinned Yarn runtime is unavailable. && exit 1)
endef

define REQUIRE_DOCKER
	@$(DOCKER) --version >$(NULL_DEVICE) 2>&1 || (echo Docker is not installed. && exit 1)
	@$(DOCKER) info >$(NULL_DEVICE) 2>&1 || (echo Docker is installed but not running. && exit 1)
endef

.PHONY: check-node check-yarn docker-check
check-node:
	$(call REQUIRE_NODE)
	@$(NODE) --version

check-yarn: check-node
	$(call REQUIRE_YARN)
	@$(YARN) --version

docker-check:
	$(call REQUIRE_DOCKER)

endif
