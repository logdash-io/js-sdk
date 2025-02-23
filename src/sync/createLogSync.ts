import { internalLogger } from '../logger/internal-logger';
import { HttpLogSync } from './HttpLogSync';
import { LogSync } from './LogSync';
import { NoopLogSync } from './NoopLogSync';

export const createLogSync = (API_KEY?: string): LogSync => {
	if (!API_KEY) {
		internalLogger.info(
			'API_KEY was not provided, using only local logger.\n',
		);
		return new NoopLogSync();
	}

	return new HttpLogSync(API_KEY);
};
