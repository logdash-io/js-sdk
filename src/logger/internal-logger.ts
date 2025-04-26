import { Logger } from './Logger.js';
import chalk from 'chalk';

export const internalLogger = new Logger(console.log, () =>
	chalk.rgb(230, 0, 118)(`[LogDash] `),
);
