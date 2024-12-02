import type { Schema, SchemaStructure } from "./Schema.ts";

export class BooleanSchema implements Schema<boolean> {
	validate(value: unknown): value is boolean {
		return typeof value === "boolean";
	}

	getDefault(): boolean {
		return false;
	}

	getStructure(): SchemaStructure {
		return { type: "boolean" };
	}
}
