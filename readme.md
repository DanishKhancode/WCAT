It is used to display or make a copy content of one or more files in the terminal

General Syntext: node wcat.js[options][filepaths] option to remove big line break(-s) option to add line number to non empty lines(-b) option to add lone number to all lines(-n)

commands:

1- node wcat.js filepath => display content of the file in the terminal
2- node wcat.js filepath1 filepath2 filepath3... => display content of all files in the terminal in (contactinated form)in the given order.
3- node wcat.js filepath => convert big line breaks into a singular line break
4- node wcat.js -b filepath => given numbering to non-empty lines
we can mix and match the options.

Edge cases:

1- If file entered is not found then it gives file does not exist error.
2- -n and -b are 2 options which are mutually exclusive so if user types both of them together only the first enter option should work.
3- -s and or both -n and -b present then -s will be executed first and then -n and -b according second rule.