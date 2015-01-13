# Install dependencies from npm.
node_modules: package.json
	@npm install

# Clean non-checked-in files.
clean:
	@rm -rf node_modules

# Phony targets.
.PHONY: clean
