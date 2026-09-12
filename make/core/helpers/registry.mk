ifndef DEVALLTECT_DOCS_REGISTRY_INCLUDED
DEVALLTECT_DOCS_REGISTRY_INCLUDED := 1

# =========================================================
# 📦 COMMAND REGISTRY
# =========================================================

define REGISTER_COMMAND
	$(1)_COMMANDS += $(2)
	$(foreach grp,$(3),$(eval $(grp)_COMMANDS += $(2)))
	ALL_COMMANDS += $(2)
endef

COMMAND_COUNT = $(words $($(1)_COMMANDS))

endif
