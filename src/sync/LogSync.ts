import { LogLevel } from '../types/LogLevel.js';

export interface LogSync {
	send(message: string, level: LogLevel, createdAt: string): void;
}
