import { Logger } from './Logger.js';
import chalk from 'chalk';

export const internalLogger = new Logger(console.log, () =>
	chalk.magenta(`\n[LogDash]\n`),
);
