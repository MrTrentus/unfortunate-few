#!bin/bash

echo "Checking for docs folder..."
if [ -d "docs" ]; then
    echo "docs folder previously existed, removing!"
    rm -rf docs
fi

if [ -d "dist" ]; then
    echo "Changing ./dist to ./docs for GitHub Pages"
    mv dist docs
else
    echo "There is currently no ./dist folder to replace docs with"
fi

if [ -d "docs" ]; then
    echo "Adding docs folder to git tracking..."
    git add docs
fi

