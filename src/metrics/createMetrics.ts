import { internalLogger } from '../logger/internal-logger.js';
import { RequiredInitializationParams } from '../types/InitializationParams.js';
import { BaseMetrics } from './BaseMetrics.js';
import { Metrics } from './Metrics.js';
import { NoopMetrics } from './NoopMetrics.js';

export const createMetrics = (
	params: RequiredInitializationParams,
): BaseMetrics => {
	if (!params.apiKey) {
		internalLogger.log(
			'Api key was not provided in the InitializationParams when calling createLogdash(), metrics will not be registered.\n',
		);
		return new NoopMetrics();
	}

	return new Metrics(params);
};
