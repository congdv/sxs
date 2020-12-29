#!/usr/bin/env node
import program from 'commander';
import readline from 'readline';
import SXS from './SExpression';

const VERSION = process.env.npm_package_version as string | '1.0.1';

function calculate(value: string) {
  try {
    const result = SXS(value);
    console.log(result);
  } catch (error) {
    console.log(`sxs: ${error.getMessage()}`);
  }
}

//https://stackoverflow.com/questions/24464404/how-to-readline-infinitely-in-node-js
function interactMode() {
  console.log('Type "exit" or Ctrl-D (i.e. EOF) to exit');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const prompt = () => {
    rl.question('>>> ', function (answer) {
      if (answer.toLowerCase() == 'exit') return rl.close();
      calculate(answer);
      prompt();
    });
  };
  prompt();
}

export function main(argv: string[]): void {
  program
    .version(VERSION)
    .usage(`[expression]\n  Examples:\n\t- sxs 233 \n\t- sxs "(add 2 3)' `)
    .description('An CLI app for S-Expressing')
    .parse(argv);

  if (argv.length > 2) {
    calculate(argv[2]);
  } else {
    interactMode();
  }
}

main(process.argv);
