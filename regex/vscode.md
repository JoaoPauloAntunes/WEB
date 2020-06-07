## header
# model
* find: ""
* replace: ""

## body
# mysql types filter
* find: "INT|VARCHAR\(\w.+\)| |FLOAT|TINYINT|TEXT"
* replace: ""

# rows to columns
* find: "\n"
* replace: "\t"