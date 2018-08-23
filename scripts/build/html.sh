#!/bin/sh
rm index.html
./node_modules/.bin/marked README.md -o content.html
cat ./partials/_header.html > index.html
cat content.html >> index.html
cat ./partials/_footer.html >> index.html
rm content.html