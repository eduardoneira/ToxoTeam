#!/bin/bash

cd ..
npm start --env='test' --verbose='false' &
cd tests

python -m unittest discover -s './integration/'