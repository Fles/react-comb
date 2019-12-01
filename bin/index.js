#!/usr/bin/env node

const { ls } = require('../lib/ls')
const colors = require('colors')

console.log(colors.rainbow(ls()))
