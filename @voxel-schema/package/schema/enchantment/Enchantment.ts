import { SchemaObject } from "../../core/SchemaObject.ts";
import { Reference } from "../../core/Reference.ts";
import { Optional } from "../../core/Optional.ts";
import { Tag } from "../../core/Tag.ts";
import { NumberSchema } from "../../core/NumberSchema.ts";
import { List } from "../../core/List.ts";
import { Enum } from "../../core/Enum.ts";

const ENCHANTMENT = new SchemaObject("enchantment", {
	description: new Reference("text_component"),
	exclusive_set: Optional(new Tag("enchantment")),
	supported_items: new Tag("item"),
	primary_items: Optional(new Tag("item")),
	weight: new NumberSchema({ min: 1, max: 1024 }),
	max_level: new NumberSchema({ min: 1, max: 255 }),
	min_cost: new Reference("enchantment_cost"),
	max_cost: new Reference("enchantment_cost"),
	anvil_cost: new NumberSchema({ min: 0 }),
	slots: new List(Enum("equipment_slot_group")),
	effects: Optional(new Reference("effect_components")),
});

export default ENCHANTMENT;
