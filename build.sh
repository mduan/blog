#!/bin/bash

# Terminate script on error
set -e

echo "Compile compass"
compass compile

echo "Compile jekyll"
jekyll
