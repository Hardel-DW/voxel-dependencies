import type { Schema } from "./Schema.ts";
import type { SchemaValue } from "./SchemaObject.ts";

export function Optional<T extends SchemaValue>(
	schema: Schema<T>,
): Schema<T | undefined> {
	return {
		validate(value: unknown): value is T | undefined {
			return value === undefined || schema.validate(value);
		},
		getDefault(): T | undefined {
			return undefined;
		},
		getStructure() {
			return {
				type: "optional",
				properties: { value: schema.getStructure() },
			};
		},
	};
}
