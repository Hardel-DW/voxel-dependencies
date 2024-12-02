import { SchemaObject } from "../../core/SchemaObject.ts";
import { Registry } from "../../core/Registry.ts";
import { Switch, Case } from "../../core/types.ts";
import { List } from "../../core/List.ts";
import { Reference } from "../../core/Reference.ts";
import { SHARED_EFFECTS } from "./SharedEffect.ts";

const ENCHANTMENT_ENTITY_EFFECT = new SchemaObject(
	"enchantment_entity_effect",
	{
		type: new Registry("enchantment_entity_effect_type"),
		[Switch]: "type",
		[Case]: {
			...SHARED_EFFECTS,
			"minecraft:all_of": {
				effects: new List(new Reference("enchantment_entity_effect")),
			},
		},
	},
);

export default ENCHANTMENT_ENTITY_EFFECT;
