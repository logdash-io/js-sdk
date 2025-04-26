export type InitializationParams = {
	apiKey?: string;
	host?: string;
	verbose?: boolean;
};

export type RequiredInitializationParams = Required<InitializationParams>;
