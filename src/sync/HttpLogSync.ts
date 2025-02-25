import { LogLevel } from '../types/LogLevel.js';
import { LogSync } from './LogSync.js';

export class HttpLogSync implements LogSync {
	constructor(private readonly API_KEY: string) {}

	// todos:
	// - queue
	// - retry
	// - batching
	send(message: string, level: LogLevel, createdAt: string): void {
		fetch(`https://api.logdash.io/logs`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'project-api-key': this.API_KEY,
			},
			body: JSON.stringify({
				message,
				level,
				createdAt,
			}),
		});
	}
}
