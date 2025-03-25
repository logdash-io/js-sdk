import { internalLogger } from '../logger/internal-logger.js';
import { BaseMetrics } from './BaseMetrics.js';
import { Metrics } from './Metrics.js';
import { NoopMetrics } from './NoopMetrics.js';

export const createMetrics = (apiKey?: string): BaseMetrics => {
	if (!apiKey) {
		internalLogger.log(
			'Api key was not provided in the InitializationParams when calling createLogdash(), metrics will not be registered.\n',
		);
		return new NoopMetrics();
	}

	return new Metrics(apiKey);
};
