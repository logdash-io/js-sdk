import { LogLevel } from '../types/LogLevel.js';
import chalk from 'chalk';

export class Logger {
	constructor(
		private readonly logMethod = console.log,
		private readonly prefix: (level: LogLevel) => string = (level) =>
			`[${new Date().toISOString()}] (${String(level).toUpperCase()}): `,
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
		this._log(LogLevel.SILLY, message);
	}

	silly(message: string) {
		this._log(LogLevel.SILLY, message);
	}

	private _log(level: LogLevel, message: string) {
		const color =
			chalk[
				{
					[LogLevel.ERROR]: 'red',
					[LogLevel.WARN]: 'yellow',
					[LogLevel.INFO]: 'white',
					[LogLevel.HTTP]: 'cyan',
					[LogLevel.VERBOSE]: 'magenta',
					[LogLevel.DEBUG]: 'green',
					[LogLevel.SILLY]: 'gray',
				}[level]
			];
		const formattedMessage = color(`${this.prefix(level)}${message}`);
		this.logMethod(formattedMessage);
		this.onLog?.(level, message);
	}
}
