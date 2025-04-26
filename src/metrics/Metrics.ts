import { internalLogger } from '../logger/internal-logger';
import { RequiredInitializationParams } from '../types/InitializationParams';
import { BaseMetrics } from './BaseMetrics';

export enum MetricOperation {
	Set = 'set',
	Change = 'change',
}

export class Metrics implements BaseMetrics {
	constructor(private readonly params: RequiredInitializationParams) {}

	set(name: string, value: number): void {
		if (this.params.verbose) {
			internalLogger.verbose(`Setting metric ${name} to ${value}`);
		}
		fetch(`${this.params.host}/metrics`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'project-api-key': this.params.apiKey,
			},
			body: JSON.stringify({
				name,
				value,
				operation: MetricOperation.Set,
			}),
		});
	}

	mutate(name: string, value: number): void {
		if (this.params.verbose) {
			internalLogger.verbose(`Mutating metric ${name} by ${value}`);
		}
		fetch(`${this.params.host}/metrics`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'project-api-key': this.params.apiKey,
			},
			body: JSON.stringify({
				name,
				value,
				operation: MetricOperation.Change,
			}),
		});
	}
}
