import { Logger } from './Logger.js';
import chalk from 'chalk';

export const internalLogger = new Logger(console.log, () =>
	chalk.rgb(21, 93, 252)(`\n[LogDash]\n`),
);
