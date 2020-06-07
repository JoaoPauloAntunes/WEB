### header
# model
* find: ""
* replace: ""
* test: ""

### body
## letters
* test: "foo 1 bar 2 baz 3 rab foofoo 12 foobar 23 foobaz 123 barbar 321 barbaz 213 barfoo barbar 1barbaz barbaz 23bazfoo bazfoo 231bazbar bazbar bazbaz foobarbaz foofoofoo foobarfoo foobarbaz bazbarfoo
foo bar baz foofoo foobar foobaz barbar 4 barbaz barfoo barbar barbaz bazfoo bazbar bazbaz foobarbaz foofoofoo foobarfoo foobarbaz bazbarfoo
f
fo"

# a single character of: a, b or c
* find: "[abc]"

# a character except: a, b or c
* find: "[^abc]"

# a character in the range: a-z
* find: "[a-z]"

# a character not in the range: a-z
* find: "[^a-z]"

# a character in the range: a-z or A-Z
* find: "[a-zA-Z]"

# any single character
* find: "."

# any whitespace character
* find: "\s"

# any non-whitespace character
* find: "\S"

# any digit
* find: "\d"

# any non-digit
* find: "\D"

# any word character
* find: "\w"

# any non-word character
* find: "\W"

# capture everythin enclosed
* find: "(...)"

# Match either a or b
* find: "(a|b)"

# zero or one of a
* find: "a?"

# zero or more of a
* find: "a*"

# one or more of a
* find: "a+"

# exactly 3 of a
* find: "a{3}"

# 3 or more of a
* find: "a{3,}"

# between 3 and 6 of a
* find: "a{3,6}"

# start of string
* find: "^"

# end of string
* find: "$"

# a word boundary
* find: "\b"

# non-word boundary
* find: "\B"

# any word character in a word boundary
* find: "\w\b"

# word character in a non-word boundary
* find: "\w\B"

# foo or bar
* find: "(foo|bar)"

# foo, bar, foofoo, foobar, barfoo or barbar
* find: "(foo|bar)+"

# start character in a word
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: ""

# 
* find: 