#!/bin/bash

curl -s -X POST -H "Content-Type: application/json" \
-H "Accept: application/json" -H "Travis-API-Version: 3" \
-H "Authorization: token ${TRAVIS_TOKEN}" \
-d '{"request":{"branch":"master"}}' \
https://api.travis-ci.com/repo/particuleio%2Fwebsite/requests
