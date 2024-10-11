export type Feature = {
	icon: string;
	name: string;
	description: string;
	screenshots: string[];
};

export type PlannedFeature = {
	title: string;
	description: string;
	status: 'in_progress' | 'completed' | 'planned';
	eta: string;
};
