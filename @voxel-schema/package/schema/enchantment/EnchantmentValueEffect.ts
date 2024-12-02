import { SchemaObject } from "../../core/SchemaObject.ts";
import { Registry } from "../../core/Registry.ts";
import { Switch, Case } from "../../core/types.ts";
import { List } from "../../core/List.ts";
import { Reference } from "../../core/Reference.ts";

const ENCHANTMENT_VALUE_EFFECT = new SchemaObject("enchantment_value_effect", {
	type: new Registry("enchantment_value_effect_type"),
	[Switch]: "type",
	[Case]: {
		"minecraft:add": {
			value: new Reference("level_based_value"),
		},
		"minecraft:all_of": {
			effects: new List(new Reference("enchantment_value_effect")),
		},
		"minecraft:multiply": {
			factor: new Reference("level_based_value"),
		},
		"minecraft:remove_binomial": {
			chance: new Reference("level_based_value"),
		},
		"minecraft:set": {
			value: new Reference("level_based_value"),
		},
	},
});

export default ENCHANTMENT_VALUE_EFFECT;
