# =========================================================
# 📚 DEVALLTECT00 DOCUMENTATION PORTAL
# =========================================================
#
# Purpose
# -------
# Development automation for the Docusaurus documentation
# portal.
#
# Responsibilities
# ----------------
# - Dependency management
# - Local development
# - Site builds
# - Formatting
# - Linting
# - Type checking
# - Internationalization (i18n)
# - Pre-commit utilities
#
# =========================================================

# ----------------------------------------------------------
# 🔡 VARIABLES - 📦 PROJECT CONFIGURATION
# ----------------------------------------------------------

.DEFAULT_GOAL := help

# ----------------------------------------------------------
# 🔡 VARIABLES - 🧰 DEVELOPMENT TOOLS
# ----------------------------------------------------------

NPM := npm


# =========================================================
# 🛠️ VALIDATION HELPERS
# =========================================================

.PHONY: check-node
check-node:
	@node --version
	@npm --version


# =========================================================
# ⚙️ SETUP & INSTALLATION
# =========================================================

.PHONY: install
install:
	$(NPM) install

.PHONY: install-clean
install-clean:
	rm -rf node_modules package-lock.json
	$(NPM) install

.PHONY: upgrade
upgrade:
	$(NPM) update

.PHONY: setup
setup: install


# =========================================================
# 🚀 DEVELOPMENT
# =========================================================

.PHONY: start
start:
	$(NPM) start

.PHONY: dev
dev:
	$(NPM) start


# =========================================================
# 🏗️ BUILD
# =========================================================

.PHONY: build
build:
	$(NPM) run build

.PHONY: serve
serve:
	$(NPM) run serve

.PHONY: clear
clear:
	$(NPM) run clear

.PHONY: rebuild
rebuild: clear build


# =========================================================
# 🧪 QUALITY
# =========================================================

.PHONY: typecheck
typecheck:
	$(NPM) run typecheck

.PHONY: lint
lint:
	$(NPM) run lint

.PHONY: lint-fix
lint-fix:
	$(NPM) run lint:fix

.PHONY: format
format:
	$(NPM) run format

.PHONY: format-check
format-check:
	$(NPM) run format:check


# =========================================================
# 🌍 INTERNATIONALIZATION (I18N)
# =========================================================

.PHONY: i18n-write
i18n-write:
	$(NPM) run write-translations

.PHONY: i18n-write-id
i18n-write-id:
	$(NPM) run write-translations -- --locale id

.PHONY: i18n-clear
i18n-clear:
	rm -rf i18n/id


# =========================================================
# 🪝 PRE-COMMIT
# =========================================================

.PHONY: pre-commit-install
pre-commit-install:
	pre-commit install

.PHONY: pre-commit-run
pre-commit-run:
	pre-commit run --all-files

.PHONY: pre-commit-update
pre-commit-update:
	pre-commit autoupdate


# =========================================================
# 🔄 COMPOSITE COMMANDS
# =========================================================

.PHONY: validate
validate: typecheck lint build

.PHONY: qa
qa: format-check typecheck lint build


# =========================================================
# ❓ HELP
# =========================================================

.PHONY: help
help:
	@echo ""
	@echo "========================================================="
	@echo "📚 DEVALLTECT00 DOCUMENTATION PORTAL"
	@echo "========================================================="
	@echo ""
	@echo "Setup"
	@echo "  make install"
	@echo "  make install-clean"
	@echo "  make upgrade"
	@echo ""
	@echo "Development"
	@echo "  make start"
	@echo "  make dev"
	@echo ""
	@echo "Build"
	@echo "  make build"
	@echo "  make serve"
	@echo "  make clear"
	@echo "  make rebuild"
	@echo ""
	@echo "Quality"
	@echo "  make typecheck"
	@echo "  make lint"
	@echo "  make lint-fix"
	@echo "  make format"
	@echo "  make format-check"
	@echo ""
	@echo "Internationalization"
	@echo "  make i18n-write"
	@echo "  make i18n-write-id"
	@echo ""
	@echo "Pre-Commit"
	@echo "  make pre-commit-install"
	@echo "  make pre-commit-run"
	@echo "  make pre-commit-update"
	@echo ""
	@echo "Composite"
	@echo "  make validate"
	@echo "  make qa"
	@echo ""
