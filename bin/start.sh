#!/bin/bash

if [ "$NODE_ENV" = "development" ] ; then
  exec strapi development
else
  exec strapi start
fi
