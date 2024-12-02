import type { Schema, SchemaStructure } from "./Schema.ts";

export class List<T> implements Schema<T[]> {
	constructor(private itemSchema: Schema<T>) {}

	validate(value: unknown): value is T[] {
		if (!Array.isArray(value)) return false;
		return value.every((item) => this.itemSchema.validate(item));
	}

	getDefault(): T[] {
		return [];
	}

	getStructure(): SchemaStructure {
		return {
			type: "array",
			properties: { items: this.itemSchema.getStructure() },
		};
	}
}
