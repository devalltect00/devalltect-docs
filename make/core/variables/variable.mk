# =========================================================
# 🔡 VARIABLES
# =========================================================

APP_NAME := Devalltect Docs
PROJECT_SLUG := devalltect00-docs

NODE ?= node
YARN_RELEASE := .yarn/releases/yarn-4.18.0.cjs
YARN := $(NODE) $(YARN_RELEASE)

ifeq ($(OS),Windows_NT)
	NULL_DEVICE := nul
	HELP_BLANK := @echo.
	HELP_PIPE := ^|
	HELP_LT := ^<
	HELP_GT := ^>
	HELP_LPAREN := (
	HELP_RPAREN := )
	HELP_AMP := ^&
else
	NULL_DEVICE := /dev/null
	HELP_BLANK := @printf '\n'
	HELP_PIPE := \|
	HELP_LT := \<
	HELP_GT := \>
	HELP_LPAREN := \(
	HELP_RPAREN := \)
	HELP_AMP := \&
endif

DOCKER ?= docker
DOCKER_COMPOSE := $(DOCKER) compose
DOCKER_TAG ?= latest

DOCKER_IMAGE_BASE := $(PROJECT_SLUG)-base:$(DOCKER_TAG)
DOCKER_IMAGE_DEV := $(PROJECT_SLUG)-dev:$(DOCKER_TAG)
DOCKER_IMAGE_PROD := $(PROJECT_SLUG)-prod:$(DOCKER_TAG)

DOCKERFILE := Dockerfile
DOCKER_DEV_PORT ?= 3000
DOCKER_PROD_PORT ?= 8080

COMPOSE_BASE := -f docker-compose.yml
COMPOSE_DEV := $(COMPOSE_BASE) -f docker-compose.dev.yml
COMPOSE_PROD := $(COMPOSE_BASE) -f docker-compose.prod.yml
