import { LogLevel } from '../types/LogLevel';

export interface LogSync {
	send(message: string, level: LogLevel, createdAt: string): void;
}
