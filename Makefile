.PHONY: clean test browser

clean:
	rm -rf browser/

test:
	./node_modules/.bin/mocha --recursive test/

browser:
	mkdir -p browser/
	./node_modules/.bin/r.js -convert lib/ browser/