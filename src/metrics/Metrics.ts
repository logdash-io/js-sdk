import { internalLogger } from '../logger/internal-logger';
import { BaseMetrics } from './BaseMetrics';

export enum MetricOperation {
	Set = 'set',
	Change = 'change',
}

export class Metrics implements BaseMetrics {
	constructor(
		private readonly apiKey: string,
		private readonly host: string,
	) {}

	set(name: string, value: number): void {
		internalLogger.verbose(`Setting metric ${name} to ${value}`);
		fetch(`${this.host}/metrics`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'project-api-key': this.apiKey,
			},
			body: JSON.stringify({
				name,
				value,
				operation: MetricOperation.Set,
			}),
		});
	}

	mutate(name: string, value: number): void {
		internalLogger.verbose(`Mutating metric ${name} by ${value}`);
		fetch(`${this.host}/metrics`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'project-api-key': this.apiKey,
			},
			body: JSON.stringify({
				name,
				value,
				operation: MetricOperation.Change,
			}),
		});
	}
}
