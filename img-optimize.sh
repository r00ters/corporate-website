#!/usr/bin/env bash
input=$1
cwebp -q 80 "$input" -o "${input%.*}.webp"
