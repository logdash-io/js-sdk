import { BaseMetrics } from './BaseMetrics';

export enum MetricOperation {
	Set = 'set',
	Change = 'change',
}

export class Metrics implements BaseMetrics {
	constructor(private readonly apiKey: string) {}

	set(name: string, value: number): void {
		fetch(`https://api.logdash.io/metrics`, {
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
		fetch(`https://api.logdash.io/metrics`, {
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
