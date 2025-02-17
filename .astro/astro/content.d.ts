declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"a-century-soaring-the-history-of-flight-training.md": {
	id: "a-century-soaring-the-history-of-flight-training.md";
  slug: "a-century-soaring-the-history-of-flight-training";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"announcing-sun-city-aviation-s-girls-in-aviation-day-and-pilot-provisions-shop-opening.md": {
	id: "announcing-sun-city-aviation-s-girls-in-aviation-day-and-pilot-provisions-shop-opening.md";
  slug: "announcing-sun-city-aviation-s-girls-in-aviation-day-and-pilot-provisions-shop-opening";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"breaking-down-an-instrument-panel.md": {
	id: "breaking-down-an-instrument-panel.md";
  slug: "breaking-down-an-instrument-panel";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"choosing-your-aircraft-exploring-different-training-planes.md": {
	id: "choosing-your-aircraft-exploring-different-training-planes.md";
  slug: "choosing-your-aircraft-exploring-different-training-planes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-flight-simulators-improve-your-skills-and-confidence.md": {
	id: "how-flight-simulators-improve-your-skills-and-confidence.md";
  slug: "how-flight-simulators-improve-your-skills-and-confidence";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-choose-the-right-flight-school-for-you.md": {
	id: "how-to-choose-the-right-flight-school-for-you.md";
  slug: "how-to-choose-the-right-flight-school-for-you";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"how-to-stay-motivated-during-your-pilot-training-journey.md": {
	id: "how-to-stay-motivated-during-your-pilot-training-journey.md";
  slug: "how-to-stay-motivated-during-your-pilot-training-journey";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"may-2023-checkride-passes.md": {
	id: "may-2023-checkride-passes.md";
  slug: "may-2023-checkride-passes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"october-2023-sun-city-student-s-receive-their-pilot-certificates-and-ratings.md": {
	id: "october-2023-sun-city-student-s-receive-their-pilot-certificates-and-ratings.md";
  slug: "october-2023-sun-city-student-s-receive-their-pilot-certificates-and-ratings";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"our-newest-multi-engine-instructor.md": {
	id: "our-newest-multi-engine-instructor.md";
  slug: "our-newest-multi-engine-instructor";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"preparing-for-the-faa-private-pilot-written-test.md": {
	id: "preparing-for-the-faa-private-pilot-written-test.md";
  slug: "preparing-for-the-faa-private-pilot-written-test";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"preparing-for-your-faa-written-exam-study-tips-and-tricks.md": {
	id: "preparing-for-your-faa-written-exam-study-tips-and-tricks.md";
  slug: "preparing-for-your-faa-written-exam-study-tips-and-tricks";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"student-appreciation-lunch.md": {
	id: "student-appreciation-lunch.md";
  slug: "student-appreciation-lunch";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"students-at-sun-city-receiving-their-private-pilot-certification.md": {
	id: "students-at-sun-city-receiving-their-private-pilot-certification.md";
  slug: "students-at-sun-city-receiving-their-private-pilot-certification";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sun-city-aviation-academy-is-2025-aopa-flight-training-experience-award-winners.md": {
	id: "sun-city-aviation-academy-is-2025-aopa-flight-training-experience-award-winners.md";
  slug: "sun-city-aviation-academy-is-2025-aopa-flight-training-experience-award-winners";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sun-city-aviation-academy-partners-with-civil-air-patrol-to-host-their-weekly-meetings-and-events.md": {
	id: "sun-city-aviation-academy-partners-with-civil-air-patrol-to-host-their-weekly-meetings-and-events.md";
  slug: "sun-city-aviation-academy-partners-with-civil-air-patrol-to-host-their-weekly-meetings-and-events";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sun-city-aviation-brings-surf-s-up-fun-to-mayor-s-kid-s-day-2024.md": {
	id: "sun-city-aviation-brings-surf-s-up-fun-to-mayor-s-kid-s-day-2024.md";
  slug: "sun-city-aviation-brings-surf-s-up-fun-to-mayor-s-kid-s-day-2024";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sun-city-aviation-hosts-aopa-s-2024-rusty-pilots-seminar.md": {
	id: "sun-city-aviation-hosts-aopa-s-2024-rusty-pilots-seminar.md";
  slug: "sun-city-aviation-hosts-aopa-s-2024-rusty-pilots-seminar";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sun-city-aviation-welcomes-a-new-beechcraft-duchess-to-its-fleet.md": {
	id: "sun-city-aviation-welcomes-a-new-beechcraft-duchess-to-its-fleet.md";
  slug: "sun-city-aviation-welcomes-a-new-beechcraft-duchess-to-its-fleet";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sun-city-grand-opening.md": {
	id: "sun-city-grand-opening.md";
  slug: "sun-city-grand-opening";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"sun-city-visits-the-atc-control-tower-at-khwo.md": {
	id: "sun-city-visits-the-atc-control-tower-at-khwo.md";
  slug: "sun-city-visits-the-atc-control-tower-at-khwo";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-importance-of-flight-simulators-in-pilot-training.md": {
	id: "the-importance-of-flight-simulators-in-pilot-training.md";
  slug: "the-importance-of-flight-simulators-in-pilot-training";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"the-return-of-sea-plane-training-at-sun-city-aviation-academy.md": {
	id: "the-return-of-sea-plane-training-at-sun-city-aviation-academy.md";
  slug: "the-return-of-sea-plane-training-at-sun-city-aviation-academy";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"today-we-celebrated-our-grand-opening.md": {
	id: "today-we-celebrated-our-grand-opening.md";
  slug: "today-we-celebrated-our-grand-opening";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"understanding-the-difference-between-part-61-and-part-141-flight-schools.md": {
	id: "understanding-the-difference-between-part-61-and-part-141-flight-schools.md";
  slug: "understanding-the-difference-between-part-61-and-part-141-flight-schools";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-is-a-tfr-election-season-s-unique-flight-regulations.md": {
	id: "what-is-a-tfr-election-season-s-unique-flight-regulations.md";
  slug: "what-is-a-tfr-election-season-s-unique-flight-regulations";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"what-to-expect-in-your-flight-training.md": {
	id: "what-to-expect-in-your-flight-training.md";
  slug: "what-to-expect-in-your-flight-training";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"your-first-flight-a-sky-high-adventure.md": {
	id: "your-first-flight-a-sky-high-adventure.md";
  slug: "your-first-flight-a-sky-high-adventure";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"location": {
"boca-raton-fl.md": {
	id: "boca-raton-fl.md";
  slug: "boca-raton-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"coconut-creek-fl.md": {
	id: "coconut-creek-fl.md";
  slug: "coconut-creek-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"coral-springs-fl.md": {
	id: "coral-springs-fl.md";
  slug: "coral-springs-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"davie-fl.md": {
	id: "davie-fl.md";
  slug: "davie-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"deerfield-beach-fl.md": {
	id: "deerfield-beach-fl.md";
  slug: "deerfield-beach-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"delray-beach-fl.md": {
	id: "delray-beach-fl.md";
  slug: "delray-beach-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"fort-lauderdale-fl.md": {
	id: "fort-lauderdale-fl.md";
  slug: "fort-lauderdale-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"hollywood-fl.md": {
	id: "hollywood-fl.md";
  slug: "hollywood-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"margate-fl.md": {
	id: "margate-fl.md";
  slug: "margate-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"miramar-fl.md": {
	id: "miramar-fl.md";
  slug: "miramar-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"pembroke-pines-fl.md": {
	id: "pembroke-pines-fl.md";
  slug: "pembroke-pines-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"plantation-fl.md": {
	id: "plantation-fl.md";
  slug: "plantation-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"pompano-beach-fl.md": {
	id: "pompano-beach-fl.md";
  slug: "pompano-beach-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
"sunrise-fl.md": {
	id: "sunrise-fl.md";
  slug: "sunrise-fl";
  body: string;
  collection: "location";
  data: InferEntrySchema<"location">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
