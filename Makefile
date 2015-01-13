start-dev: node_modules
	@./node_modules/.bin/nodemon --delay 500ms

# Install dependencies from npm.
node_modules: package.json
	@npm install

# Clean non-checked-in files.
clean:
	@rm -rf node_modules

# Phony targets.
.PHONY: clean
