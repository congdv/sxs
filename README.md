# sxs

A simple CLI to help calculate [S-expression](https://en.wikipedia.org/wiki/S-expression)

### Quickstart

Install the sxs CLI as global CLI

```
npm install -g sxs
```


### Development

```sh
npm run build
chmod +x ./bin/sxs
./bin/sxs
```

### Usage

```sh
sxs 123
123

sxs "(add 2 3)"
5
```

Interactive Mode
```
sxs

>>> 234
234
>>> (add 2 5)
7
>> exit
```