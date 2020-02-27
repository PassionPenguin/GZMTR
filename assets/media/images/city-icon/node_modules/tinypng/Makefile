
PREFIX ?= /usr/local

install: bin/tinypng
	cp $< $(PREFIX)/$<

uninstall:
	rm -f $(PREFIX)/bin/tinypng

.PHONY: install uninstall