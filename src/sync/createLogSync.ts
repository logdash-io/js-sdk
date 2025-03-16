import { internalLogger } from '../logger/internal-logger.js';
import { HttpLogSync } from './HttpLogSync.js';
import { LogSync } from './LogSync.js';
import { NoopLogSync } from './NoopLogSync.js';

export const createLogSync = (API_KEY?: string): LogSync => {
	if (!API_KEY) {
		internalLogger.log(
			'Api key was not provided in the InitializationParams when calling createLogdash(), using only local logger.\n',
		);
		return new NoopLogSync();
	}

	return new HttpLogSync(API_KEY);
};
