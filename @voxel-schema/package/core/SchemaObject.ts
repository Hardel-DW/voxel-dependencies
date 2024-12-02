import type { Schema, SchemaStructure } from "./Schema.ts";

export type SchemaValue =
	| string
	| number
	| boolean
	| null
	| undefined
	| SchemaValue[]
	| { [key: string]: SchemaValue };

export class SchemaObject implements Schema<Record<string, SchemaValue>> {
	constructor(
		private name: string,
		private properties: Record<string, Schema<SchemaValue>>,
	) {}

	validate(value: unknown): value is Record<string, SchemaValue> {
		if (typeof value !== "object" || value === null) {
			return false;
		}

		const record = value as Record<string, unknown>;

		for (const [key, schema] of Object.entries(this.properties)) {
			if (!schema.validate(record[key])) {
				return false;
			}
		}

		return true;
	}

	getDefault(): Record<string, SchemaValue> {
		const result: Record<string, SchemaValue> = {};
		for (const [key, schema] of Object.entries(this.properties)) {
			result[key] = schema.getDefault();
		}
		return result;
	}

	getStructure(): SchemaStructure {
		const properties: Record<string, SchemaStructure> = {};
		for (const [key, schema] of Object.entries(this.properties)) {
			properties[key] = schema.getStructure();
		}

		return {
			type: "object",
			properties,
		};
	}
}
