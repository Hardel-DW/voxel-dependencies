import { SchemaObject } from "../core/SchemaObject.ts";
import { StringSchema } from "../core/StringSchema.ts";
import { NumberSchema } from "../core/NumberSchema.ts";

export const PAINTING_VARIANT = new SchemaObject("painting_variant", {
	asset_id: new StringSchema(),
	width: new NumberSchema({ min: 1, max: 16 }),
	height: new NumberSchema({ min: 1, max: 16 }),
});
