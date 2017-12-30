#!/bin/bash

cd ..
npm test &
cd tests

python -m unittest discover -s './integration/'