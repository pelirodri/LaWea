CC := clang
CFLAGS := -std=c2x -Ofast

ifneq ($(shell uname -s), Darwin)
LDLIBS := -lm
endif

NAME := laweá
BUILD_DIR := ./build
BIN := $(BUILD_DIR)/bin/$(NAME)
SRC := $(wildcard ./src/*.c)
OBJ := $(patsubst %.c,$(BUILD_DIR)/%.o,$(notdir $(SRC)))
DEP := $($(filter-out %main.o,$(OBJ)):.o=.d)

$(BIN): $(OBJ)
	mkdir -p $(@D)
	$(CC) $^ $(LDLIBS) -o $@

include $(DEP)

$(BUILD_DIR)/%.o: ./src/%.c Makefile
	mkdir -p $(@D)
	$(CC) $(CFLAGS) -MMD -c $< -o $@

.PHONY: install uninstall clean

install:
	cp $(BIN) /usr/local/bin

uninstall:
	$(RM) /usr/local/bin/$(NAME)

clean:
	rm -rfv $(BUILD_DIR)
