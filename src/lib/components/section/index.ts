import Content from './section-content.svelte';
import Description from './section-description.svelte';
import Header from './section-header.svelte';
import Title from './section-title.svelte';
import Root from './section.svelte';

export {
	Content,
	Description,
	Header,
	Root,
	//
	Root as Section,
	Content as SectionContent,
	Description as SectionDescription,
	Header as SectionHeader,
	Title as SectionTitle,
	Title
};

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
