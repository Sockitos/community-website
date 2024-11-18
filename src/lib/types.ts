export type Feature = {
	title: string;
	description: string;
	screenshots: string[];
};

export type PlannedFeature = {
	title: string;
	description: string;
	status: 'In Progress' | 'Completed' | 'Planned';
	eta: string;
};
