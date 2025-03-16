import { internalLogger } from '../logger/internal-logger.js';
import { HttpLogSync } from './HttpLogSync.js';
import { LogSync } from './LogSync.js';
import { NoopLogSync } from './NoopLogSync.js';

export const createLogSync = (apiKey?: string): LogSync => {
	if (!apiKey) {
		internalLogger.log(
			'Api key was not provided in the InitializationParams when calling createLogdash(), using only local logger.\n',
		);
		return new NoopLogSync();
	}

	return new HttpLogSync(apiKey);
};
