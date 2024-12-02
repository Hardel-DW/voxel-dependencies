import { SchemaObject } from "../../core/SchemaObject.ts";
import { Registry } from "../../core/Registry.ts";
import { Switch, Case } from "../../core/types.ts";
import { Tag } from "../../core/Tag.ts";
import { Reference } from "../../core/Reference.ts";
import { NumberSchema } from "../../core/NumberSchema.ts";

const ENCHANTMENT_PROVIDER = new SchemaObject("enchantment_provider", {
	type: new Registry("enchantment_provider_type"),
	[Switch]: "type",
	[Case]: {
		"minecraft:by_cost": {
			enchantment: new Tag("enchantment"),
			cost: new Reference("int_provider"),
		},
		"minecraft:by_cost_with_difficulty": {
			enchantments: new Tag("enchantment"),
			min_cost: new NumberSchema({ min: 1 }),
			max_cost_span: new NumberSchema({ min: 0 }),
		},
	},
});

export default ENCHANTMENT_PROVIDER;
