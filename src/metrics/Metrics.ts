import { BaseMetrics } from './BaseMetrics';

export enum MetricOperation {
	Set = 'set',
	Change = 'change',
}

export class Metrics implements BaseMetrics {
	constructor(private readonly apiKey: string) {}

	set(key: string, value: number): void {
		fetch(`https://api.logdash.io/metrics`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'project-api-key': this.apiKey,
			},
			body: JSON.stringify({
				key,
				value,
				operation: MetricOperation.Set,
			}),
		});
	}

	change(key: string, value: number): void {
		fetch(`https://api.logdash.io/metrics`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'project-api-key': this.apiKey,
			},
			body: JSON.stringify({
				key,
				value,
				operation: MetricOperation.Change,
			}),
		});
	}
}
