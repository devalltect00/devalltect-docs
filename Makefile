# Makefile for Devalltect Docs

ROOT_DIR := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

.DEFAULT_GOAL := help

include $(ROOT_DIR)/make/core/variables/variable.mk
include $(ROOT_DIR)/make/core/helpers/common.mk
include $(ROOT_DIR)/make/core/setup_install/command.mk
include $(ROOT_DIR)/make/core/local/command.mk
include $(ROOT_DIR)/make/core/testing/command.mk
include $(ROOT_DIR)/make/core/lint_format/command.mk
include $(ROOT_DIR)/make/core/documentation/command.mk
include $(ROOT_DIR)/make/core/qa/command.mk
include $(ROOT_DIR)/make/core/ci/command.mk
include $(ROOT_DIR)/make/core/docker/command/common.mk
include $(ROOT_DIR)/make/core/docker/command/core.mk
include $(ROOT_DIR)/make/core/compose/command/common.mk
include $(ROOT_DIR)/make/core/compose/command/core.mk
include $(ROOT_DIR)/make/core/cleanup/command.mk
include $(ROOT_DIR)/make/core/help/command.mk
