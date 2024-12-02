import { SchemaObject } from "../../core/SchemaObject.ts";
import { Optional } from "../../core/Optional.ts";
import { Enum } from "../../core/Enum.ts";
import { Reference } from "../../core/Reference.ts";
import { ObjectOrList } from "../../core/ObjectOrList.ts";

const TARGETED_CONDITIONAL_EFFECT = new SchemaObject(
	"targeted_conditional_effect",
	{
		enchanted: Enum("equipment_slot_group"),
		affected: Optional(Enum("enchantment_target")),
		effect: new Reference("conditional_effect"),
		requirements: Optional(ObjectOrList(new Reference("condition"))),
	},
);

export default TARGETED_CONDITIONAL_EFFECT;
