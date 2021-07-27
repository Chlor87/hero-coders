# Hero Coders Coding Challenge

## Description
The project implements the coding assignment. It works like this:
- fetch components
- find components without `lead` field
- find issues belonging to the filtered components
- group-count issues by component
- pretty print the mapping in a table

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
fetching components...
done, fetched 3 leadless components
fetching issues...
23/23
done, fetched 23 issues
┌─────────┬──────────────────┬────────┐
│ (index) │    component     │ issues │
├─────────┼──────────────────┼────────┤
│    0    │ 'Infrastructure' │   9    │
│    1    │  'Marketplace'   │   6    │
│    2    │ 'Data analysis'  │   8    │
└─────────┴──────────────────┴────────┘
```