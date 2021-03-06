# sxs

A simple CLI to help calculate [S-expression](https://en.wikipedia.org/wiki/S-expression)

### Quickstart

Install the sxs CLI as global CLI

```
npm install -g sxs
```

### Usage

```
Usage: sxs [expression]
  Examples:
	- sxs 233 
	- sxs "(add 2 3)' 

An CLI app for S-Expressing

Options:
  -V, --version  output the version number
  -h, --help     display help for command

```

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
### Development

```sh
git clone https://github.com/congdv/sxs
cd sxs
npm
npm run build
chmod +x ./bin/sxs
./bin/sxs
```