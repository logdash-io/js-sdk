import { LogSync } from './LogSync';

export class NoopLogSync implements LogSync {
	send(message: string, level: string, createdAt: string): void {}
}
