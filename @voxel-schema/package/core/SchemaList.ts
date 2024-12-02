import type { Schema, SchemaStructure } from "./Schema.ts";

export class SchemaList<T> implements Schema<T[]> {
	constructor(
		private name: string,
		private itemSchema: Schema<T>,
	) {}

	validate(value: unknown): value is T[] {
		if (!Array.isArray(value)) return false;
		return value.every((item) => this.itemSchema.validate(item));
	}

	getDefault(): T[] {
		return [];
	}

	getStructure(): SchemaStructure {
		return {
			type: "schema_list",
			properties: { items: this.itemSchema.getStructure() },
		};
	}
}

export default SchemaList;
