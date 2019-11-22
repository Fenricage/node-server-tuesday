#!/usr/bin/env bash

file="paths.txt"

rows=$(cat $file)


for row in $rows
do
stylelint --fix $row
done
