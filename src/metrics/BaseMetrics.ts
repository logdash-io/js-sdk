export interface BaseMetrics {
	set(key: string, value: number): void;
	change(key: string, value: number): void;
}
