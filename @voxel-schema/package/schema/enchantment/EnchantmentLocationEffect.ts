import { SchemaObject } from "../../core/SchemaObject.ts";
import { Registry } from "../../core/Registry.ts";
import { Switch, Case } from "../../core/types.ts";
import { List } from "../../core/List.ts";
import { Reference } from "../../core/Reference.ts";
import { SHARED_EFFECTS } from "./SharedEffect.ts";

const ENCHANTMENT_LOCATION_EFFECT = new SchemaObject(
	"enchantment_location_effect",
	{
		type: new Registry("enchantment_location_based_effect_type"),
		[Switch]: "type",
		[Case]: {
			...SHARED_EFFECTS,
			"minecraft:all_of": {
				effects: new List(new Reference("enchantment_location_effect")),
			},
			"minecraft:attribute": new List(new Reference("attribute_effect_fields")),
		},
	},
);

export default ENCHANTMENT_LOCATION_EFFECT;
