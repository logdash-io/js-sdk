import { LogLevel } from '../types/LogLevel.js';
import chalk from 'chalk';

const LOG_LEVEL_COLORS: Record<LogLevel, [number, number, number]> = {
	[LogLevel.ERROR]: [231, 0, 11],
	[LogLevel.WARN]: [254, 154, 0],
	[LogLevel.INFO]: [21, 93, 252],
	[LogLevel.HTTP]: [0, 166, 166],
	[LogLevel.VERBOSE]: [0, 166, 0],
	[LogLevel.DEBUG]: [0, 166, 62],
	[LogLevel.SILLY]: [80, 80, 80],
};

export class Logger {
	constructor(
		private readonly logMethod = console.log,
		private readonly prefix: (level: LogLevel) => string = (level) =>
			`${String(level).toUpperCase()} `,
		private readonly onLog?: (level: LogLevel, message: string) => void,
	) {}

	error(...data: any[]): void {
		this._log(LogLevel.ERROR, this._formatData(data));
	}

	warn(...data: any[]): void {
		this._log(LogLevel.WARN, this._formatData(data));
	}

	info(...data: any[]): void {
		this._log(LogLevel.INFO, this._formatData(data));
	}

	log(...data: any[]): void {
		this._log(LogLevel.INFO, this._formatData(data));
	}

	http(...data: any[]): void {
		this._log(LogLevel.HTTP, this._formatData(data));
	}

	verbose(...data: any[]): void {
		this._log(LogLevel.VERBOSE, this._formatData(data));
	}

	debug(...data: any[]): void {
		this._log(LogLevel.DEBUG, this._formatData(data));
	}

	silly(...data: any[]): void {
		this._log(LogLevel.SILLY, this._formatData(data));
	}

	private _formatData(data: any[]): string {
		return data
			.map((item) => {
				if (typeof item === 'object' && item !== null) {
					try {
						return JSON.stringify(item);
					} catch (e) {
						return String(item);
					}
				}
				return String(item);
			})
			.join(' ');
	}

	private _log(level: LogLevel, message: string): void {
		const color = LOG_LEVEL_COLORS[level];

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
