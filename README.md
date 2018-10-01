# La Weá

La Weá is a programming language consisting of 16 commands represented by highly colloquial terms in Chilean Spanish. Commands must be separated; extra whitespaces and newlines are ignored; single-line comments are preceded by a ```#```.

Command       | Description
------------- | -----------
```maricón``` | Decrements current cell value by 1.
```maraco```  | Decrements current cell value by 2.
```weón```    | Increments current cell value by 1.
```aweonao``` | Increments current cell value by 2.
```maraca```  | Sets current cell value to 0.
```chucha```  | Moves back one cell.
```puta```    | Moves forward one cell.
```pichula``` | If current cell value is 0, moves the instruction pointer after the matching ```tula``` command.
```tula```    | If current cell value is not 0, moves the instruction pointer after the matching ```pichula``` command.
```pico```    | Moves the instruction pointer after the closest ```tula``` command, regardless of the current cell value.
```ctm```     | Prints current cell value to STDOUT as an ASCII character.
```quéweá```  | Reads ASCII character from STDIN and stores it in the current cell.
```chúpala``` | Prints current cell value to STDIN as an integer.
```brígido``` | Reads integer from STDIN and stores it in the current cell.
```perkin```  | Copies current cell value if there is no copy; otherwise, pastes the copied value and resets the copy.
```mierda```  | Terminates program.

JavaScript based online interpreter: https://laweainterpreter.firebaseapp.com/

**Note:** Interpreters must be compiled with Clang. Could not get C++ interpreter to compile on Windows.
