import type { Schema, SchemaStructure } from "./Schema.ts";

export class EnumSchema implements Schema<string> {
	private values: string[];

	constructor(values: string[] | readonly string[]) {
		this.values = [...values];
	}

	validate(value: unknown): value is string {
		return typeof value === "string" && this.values.includes(value);
	}

	getDefault(): string {
		return this.values[0] ?? "";
	}

	getStructure(): SchemaStructure {
		return {
			type: "enum",
			constraints: { values: this.values },
		};
	}
}

// Helper function
export function Enum(
	values: string[] | readonly string[] | string,
): EnumSchema {
	if (typeof values === "string") {
		return new EnumSchema([values]);
	}
	return new EnumSchema(values);
}
