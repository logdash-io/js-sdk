import { LogLevel } from '../types/LogLevel.js';
import chalk from 'chalk';

export class Logger {
	constructor(
		private readonly logMethod = console.log,
		private readonly prefix: (level: LogLevel) => string = (level) =>
			`${String(level).toUpperCase()} `,
		private readonly onLog?: (level: LogLevel, message: string) => void,
	) {}

	error(message: string) {
		this._log(LogLevel.ERROR, message);
	}

	warn(message: string) {
		this._log(LogLevel.WARN, message);
	}

	info(message: string) {
		this._log(LogLevel.INFO, message);
	}

	log(message: string) {
		this._log(LogLevel.INFO, message);
	}

	http(message: string) {
		this._log(LogLevel.HTTP, message);
	}

	verbose(message: string) {
		this._log(LogLevel.VERBOSE, message);
	}

	debug(message: string) {
		this._log(LogLevel.DEBUG, message);
	}

	silly(message: string) {
		this._log(LogLevel.SILLY, message);
	}

	private _log(level: LogLevel, message: string) {
		const color = {
			[LogLevel.ERROR]: [231, 0, 11],
			[LogLevel.WARN]: [254, 154, 0],
			[LogLevel.INFO]: [21, 93, 252],
			[LogLevel.HTTP]: [0, 166, 166],
			[LogLevel.VERBOSE]: [0, 166, 0],
			[LogLevel.DEBUG]: [0, 166, 62],
			[LogLevel.SILLY]: [80, 80, 80],
		}[level];

		const datePrefix = chalk.rgb(
			156,
			156,
			156,
		)(`[${new Date().toISOString()}]`);
		const prefix = chalk.rgb(
			color[0],
			color[1],
			color[2],
		)(`${this.prefix(level)}`);
		const formattedMessage = `${datePrefix} ${prefix}${message}`;
		this.logMethod(formattedMessage);
		this.onLog?.(level, message);
	}
}
