import { Logger } from './logger/Logger.js';
import { BaseMetrics } from './metrics/BaseMetrics.js';
import { createMetrics } from './metrics/createMetrics.js';
import { createLogSync } from './sync/createLogSync.js';
import { InitializationParams } from './types/InitializationParams.js';

export type LogdashInstance = {
	logger: Logger;
	metrics: BaseMetrics;
};

export const createLogDash = (
	params?: InitializationParams,
): LogdashInstance => {
	const requiredParams = {
		apiKey: params?.apiKey || '',
		host: params?.host || 'https://api.logdash.io',
		verbose: params?.verbose || false,
	};
	const logSync = createLogSync(requiredParams);
	const metrics = createMetrics(requiredParams);

	return {
		// todo: make Logger params an object
		logger: new Logger(console.log, undefined, (level, message) => {
			logSync.send(message, level, new Date().toISOString());
		}),
		metrics,
	};
};
