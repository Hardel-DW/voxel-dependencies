import { SchemaObject } from "../../core/SchemaObject.ts";
import { StringSchema } from "../../core/StringSchema.ts";
import { Registry } from "../../core/Registry.ts";
import { Enum } from "../../core/Enum.ts";
import { Reference } from "../../core/Reference.ts";

const ATTRIBUTE_EFFECT_FIELDS = new SchemaObject("attribute_effect_fields", {
	id: new StringSchema(),
	attribute: new Registry("attribute"),
	amount: new Reference("level_based_value"),
	operation: Enum("attribute_modifier_operation"),
});

export default ATTRIBUTE_EFFECT_FIELDS;
