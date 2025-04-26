import { RequiredInitializationParams } from '../types/InitializationParams.js';
import { LogLevel } from '../types/LogLevel.js';
import { LogSync } from './LogSync.js';

export class HttpLogSync implements LogSync {
	private sequenceNumber = 0;

	constructor(private readonly params: RequiredInitializationParams) {}

	// todos:
	// - queue
	// - retry
	// - batching
	send(message: string, level: LogLevel, createdAt: string): void {
		fetch(`${this.params.host}/logs`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'project-api-key': this.params.apiKey,
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
