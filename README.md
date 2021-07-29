# Hero Coders Coding Challenge

## Description
The project implements the coding assignment. It works like this:
- fetch components
- find components without `lead` field
- for every component get the issue count
- merge results
- print the mapping in a table

## Dependencies
Developed and tested with NodeJS `v16.5.0`

## Install
Copy `config.example.json` onto `config.json`

`yarn`

## Test
`yarn test`

## Run
If you want to run it with pure `node` command, please call it with `--es-module-specifier-resolution node` flag, otherwise:

`yarn start`

## Output
```
kuba@kuba-pc:~/hero-coders$ yarn start
yarn run v1.22.5
$ node --es-module-specifier-resolution node .
┌────────────────┬────────┐
│    (index)     │ Values │
├────────────────┼────────┤
│ Data analysis  │   8    │
│ Infrastructure │   9    │
│  Marketplace   │   6    │
└────────────────┴────────┘
Done in 1.01s.
```