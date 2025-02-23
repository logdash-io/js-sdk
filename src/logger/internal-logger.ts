import { Logger } from './Logger';
import chalk from 'chalk';
const pkgJson = require('../../package.json');

export const internalLogger = new Logger(console.log, () =>
	chalk.magenta(`\n[LogDash@${pkgJson.version}]\n`),
);
