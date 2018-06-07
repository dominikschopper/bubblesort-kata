#! /usr/bin/env node
const fs = require('fs');
const argv = require('yargs')
    .option('amount', {
        alias: 'a',
        describe: 'the amount of random elements to provide like\n\t-a 100\n\t--amount=200'
    })
    // .option('output', {
    //     alias: 'o',
    //     describe: 'whicht type can be one of "string" or "integer"',
    //     choices: ['string', 'integer'],
    //     default: 'integer'
    // })
    // .option('type', {
    //     alieas: 't',
    //     describe: 'which output filetype, "plain" or "array"',
    //     choices: ['plain', 'array'],
    //     default: 'array'
    // })
    .demandOption(['amount'], 'Please provide an amount')
    .help()
    .argv;

const createRandomInteger = (min = 0, max = Number.MAX_SAFE_INTEGER) => {
    return parseInt( Math.random() * (max - min) + min );
}
const randomness = [];
const amount = argv.amount * 1;
const max = amount * 2;
for (let i = 0; i < amount; i += 1) {
    randomness.push(createRandomInteger(0, max));
}

console.log(`module.exports = ${JSON.stringify(randomness)};`);

