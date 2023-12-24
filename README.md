# Seedster

A simple CLI tool to generate mock JSON data. The script will analyze a typescript file's type and interface definitions and create a `seeds.json` file. 

## Input

1. Pass amount per object with cli command. Defaults to `20`

```bash
npm run invoke [amount]
npm run invoke 200
```



## Dependencies  

- [zx](https://github.com/google/zx)
- [openai](https://platform.openai.com/docs/guides/text-generation)


## Development

1) `npm i`
2) `cp .env.example .env`
3) Add Open AI credentials to `.env`




## TODO
- easier bootstrap
