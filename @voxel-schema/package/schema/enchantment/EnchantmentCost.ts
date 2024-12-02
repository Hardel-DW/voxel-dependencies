import { SchemaObject } from "../../core/SchemaObject.ts";
import { NumberSchema } from "../../core/NumberSchema.ts";

const ENCHANTMENT_COST = new SchemaObject("enchantment_cost", {
	base: new NumberSchema(),
	per_level_above_first: new NumberSchema(),
});

export default ENCHANTMENT_COST;
