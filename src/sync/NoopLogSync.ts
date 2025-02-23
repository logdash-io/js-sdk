import { LogSync } from './LogSync.js';

export class NoopLogSync implements LogSync {
	send(message: string, level: string, createdAt: string): void {}
}
