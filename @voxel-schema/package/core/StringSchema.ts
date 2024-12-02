import type { Schema, SchemaStructure } from "./Schema.ts";

export class StringSchema implements Schema<string> {
	validate(value: unknown): value is string {
		return typeof value === "string";
	}

	getDefault(): string {
		return "";
	}

	getStructure(): SchemaStructure {
		return { type: "string" };
	}
}
