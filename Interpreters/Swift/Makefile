SWIFTC := swiftc
SWIFTFLAGS := -Ounchecked

NAME := laweáswift
BUILD_DIR := ./build
SRC_DIR := ./src
BIN := $(BUILD_DIR)/bin/$(NAME)
SRC := $(wildcard $(SRC_DIR)/*.swift)
OBJ := $(patsubst %.swift,$(BUILD_DIR)/%.o,$(notdir $(SRC)))

$(BIN): $(OBJ)
	mkdir -p $(@D)
	$(SWIFTC) $^ -o $@

$(BUILD_DIR)/main.o: $(SRC_DIR)/main.swift $(BUILD_DIR)/LaWeáInterpreter.swiftmodule
	$(SWIFTC) $(SWIFTFLAGS) -c $< -I$(@D) -o $@

$(BUILD_DIR)/LaWeáInterpreter.o: $(SRC_DIR)/LaWeáInterpreter.swift
	mkdir -p $(@D)
	$(SWIFTC) $(SWIFTFLAGS) -c $< -parse-as-library -o $@

$(BUILD_DIR)/LaWeáInterpreter.swiftmodule: $(SRC_DIR)/LaWeáInterpreter.swift
	$(SWIFTC) $< -emit-module -emit-module-path $(@D) 
	$(RM) *.swiftsourceinfo *.swiftdoc

.PHONY: install uninstall clean

install:
	cp $(BIN) /usr/local/bin

uninstall:
	$(RM) /usr/local/bin/$(NAME)

clean:
	rm -rfv $(BUILD_DIR)
