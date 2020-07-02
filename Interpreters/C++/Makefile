CXX := clang++

ifeq ($(shell uname -s), Darwin)
CXXFLAGS := -std=c++2a -Ofast
else
CXXFLAGS := -std=c++20 -Ofast
endif

NAME := laweá++
BUILD_DIR := ./build
BIN := $(BUILD_DIR)/bin/$(NAME)
SRC := $(wildcard ./src/*.cpp)
OBJ := $(patsubst %.cpp,$(BUILD_DIR)/%.o,$(notdir $(SRC)))
DEP := $($(filter-out %main.o,$(OBJ)):.o=.d)

$(BIN): $(OBJ)
	mkdir -p $(@D)
	$(CXX) $^ -o $@

include $(DEP)

$(BUILD_DIR)/%.o: ./src/%.cpp Makefile
	mkdir -p $(@D)
	$(CXX) $(CXXFLAGS) -MMD -c $< -o $@

.PHONY: install uninstall clean

install:
	cp $(BIN) /usr/local/bin

uninstall:
	$(RM) /usr/local/bin/$(NAME)

clean:
	rm -rfv $(BUILD_DIR)
