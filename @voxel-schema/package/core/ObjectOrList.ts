import type { Schema } from "./Schema.ts";

export function ObjectOrList<T>(schema: Schema<T>): Schema<T | T[]> {
	return {
		validate(value: unknown): value is T | T[] {
			if (Array.isArray(value)) {
				return value.every((item) => schema.validate(item));
			}
			return schema.validate(value);
		},
		getDefault(): T {
			return schema.getDefault();
		},
		getStructure() {
			return {
				type: "object_or_list",
				properties: { value: schema.getStructure() },
			};
		},
	};
}
