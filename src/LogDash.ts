import { Logger } from './logger/Logger.js';
import { createLogSync } from './sync/createLogSync.js';

type InitializationParams = {
	apiKey?: string;
};

type Instance = {
	logger: Logger;
	// metricTracker: MetricTracker;
	// etc.
};

export const createLogDash = (params?: InitializationParams): Instance => {
	const logSync = createLogSync(params?.apiKey);

	return {
		// todo: make Logger params an object
		logger: new Logger(console.log, undefined, (level, message) => {
			logSync.send(message, level, new Date().toISOString());
		}),
	};
};
