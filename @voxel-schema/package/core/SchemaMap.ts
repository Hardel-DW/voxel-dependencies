import type { Schema, SchemaStructure } from "./Schema.ts";

export class SchemaMap<K, V> implements Schema<Record<string, V>> {
	constructor(
		private keySchema: Schema<K>,
		private valueSchema: Schema<V>,
	) {}

	validate(value: unknown): value is Record<string, V> {
		if (typeof value !== "object" || value === null) return false;
		return Object.entries(value).every(
			([key, val]) =>
				this.keySchema.validate(key) && this.valueSchema.validate(val),
		);
	}

	getDefault(): Record<string, V> {
		return {};
	}

	getStructure(): SchemaStructure {
		return {
			type: "map",
			properties: {
				key: this.keySchema.getStructure(),
				value: this.valueSchema.getStructure(),
			},
		};
	}
}
