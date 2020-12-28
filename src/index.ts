#!/usr/bin/env node
import program from 'commander';
import SXS from './SExpression';

export function main(argv: string[]): void {
  program
    .version('0.0.1')
    .usage("[global options] command")
    .description('An CLI app for S-Expressing')
    .parse(argv);

  const value = argv[2];
  console.log(value);
}

main(process.argv);
