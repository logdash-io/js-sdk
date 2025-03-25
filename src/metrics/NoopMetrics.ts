import { BaseMetrics } from './BaseMetrics';

export class NoopMetrics implements BaseMetrics {
	set(): void {}
	change(): void {}
}
