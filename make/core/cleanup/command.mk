include $(ROOT_DIR)/make/core/helpers/common.mk
include $(ROOT_DIR)/make/core/helpers/registry.mk

PROJECT_CLEANUP_COMMANDS_LIST := clean-cache clean-build clean clean-all
DOCKER_CLEANUP_COMMANDS_LIST := d-remove-images d-remove-volumes
$(foreach cmd,$(PROJECT_CLEANUP_COMMANDS_LIST),$(eval $(call REGISTER_COMMAND,PROJECT_CLEANUP,$(cmd),LOCAL)))
$(foreach cmd,$(DOCKER_CLEANUP_COMMANDS_LIST),$(eval $(call REGISTER_COMMAND,DOCKER_CLEANUP,$(cmd),DOCKER COMPOSE)))

.PHONY: clean-cache clean-build clean clean-all d-remove-images d-remove-volumes
clean-cache: check-node
	$(NODE) -e "const fs=require('fs'); for (const p of ['.docusaurus','.cache','.cache-loader','.parcel-cache']) fs.rmSync(p,{recursive:true,force:true});"

clean-build: check-node
	$(NODE) -e "const fs=require('fs'); for (const p of ['build','public','coverage']) fs.rmSync(p,{recursive:true,force:true});"

clean: clean-cache clean-build

clean-all: clean
	$(NODE) -e "require('fs').rmSync('node_modules',{recursive:true,force:true});"

d-remove-images: docker-check
	-$(DOCKER) image rm $(DOCKER_IMAGE_BASE) $(DOCKER_IMAGE_DEV) $(DOCKER_IMAGE_PROD) $(PROJECT_SLUG)-validation:$(DOCKER_TAG)

d-remove-volumes: docker-check
	$(DOCKER_COMPOSE) $(COMPOSE_DEV) down --volumes --remove-orphans
