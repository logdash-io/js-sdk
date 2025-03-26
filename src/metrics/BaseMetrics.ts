export interface BaseMetrics {
	set(key: string, value: number): void;
	mutate(key: string, value: number): void;
}
