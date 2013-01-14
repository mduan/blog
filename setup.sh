#!/bin/bash

# Terminate script on error
set -e

echo "Install jekyll"
sudo gem install jekyll

echo "Install compass"
sudo gem install compass

echo "Install susy"
sudo gem install susy

echo "Linking to /var/www"
sudo ln -sfnv "$PWD/_site" /var/www
