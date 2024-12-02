import type { Schema, SchemaStructure } from "./Schema.ts";

export class FloatSchema implements Schema<number> {
	constructor(private options: { min?: number; max?: number } = {}) {}

	validate(value: unknown): value is number {
		if (typeof value !== "number") return false;
		if (this.options.min !== undefined && value < this.options.min)
			return false;
		if (this.options.max !== undefined && value > this.options.max)
			return false;
		return true;
	}

	getDefault(): number {
		return this.options.min ?? 0;
	}

	getStructure(): SchemaStructure {
		return {
			type: "float",
			constraints: this.options,
		};
	}
}

// Helper function
export function Float(options?: { min?: number; max?: number }): FloatSchema {
	return new FloatSchema(options);
}
