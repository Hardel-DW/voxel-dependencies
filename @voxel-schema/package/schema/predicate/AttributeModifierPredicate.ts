import { SchemaObject } from "../../core/SchemaObject.ts";
import { StringSchema } from "../../core/StringSchema.ts";
import { Optional } from "../../core/Optional.ts";
import { Tag } from "../../core/Tag.ts";
import { Reference } from "../../core/Reference.ts";
import { Enum } from "../../core/Enum.ts";

export const ATTRIBUTE_MODIFIERS_ENTRY_PREDICATE = new SchemaObject(
	"attribute_modifiers_entry_predicate",
	{
		id: new StringSchema(),
		attribute: Optional(new Tag("attribute")),
		amount: Optional(new Reference("float_bounds")),
		operation: Optional(Enum("attribute_modifier_operation")),
		slot: Optional(Enum("equipment_slot_group")),
	},
);
