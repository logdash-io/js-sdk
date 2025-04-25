import { LogLevel } from '../types/LogLevel.js';
import { LogSync } from './LogSync.js';

export class HttpLogSync implements LogSync {
	private sequenceNumber = 0;

	constructor(
		private readonly apiKey: string,
		private readonly host: string = 'https://api.logdash.io',
	) {}

	// todos:
	// - queue
	// - retry
	// - batching
	send(message: string, level: LogLevel, createdAt: string): void {
		fetch(`${this.host}/logs`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'project-api-key': this.apiKey,
			},
			body: JSON.stringify({
				message,
				level,
				createdAt,
				sequenceNumber: this.sequenceNumber++,
			}),
		});
	}
}
