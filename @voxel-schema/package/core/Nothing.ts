import type { Schema, SchemaStructure } from "./Schema.ts";

export class NothingSchema implements Schema<null> {
	validate(value: unknown): value is null {
		return value === null;
	}

	getDefault(): null {
		return null;
	}

	getStructure(): SchemaStructure {
		return {
			type: "nothing",
		};
	}
}

export function Nothing(): Schema<null> {
	return new NothingSchema();
}
