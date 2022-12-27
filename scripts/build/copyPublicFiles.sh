#!/bin/bash

cp ./LICENSE ./dist/LICENSE
cp ./README.md ./dist/README.md

touch ./dist/yarn.lock
echo "/yarn.lock" > ./dist/.npmignore
