import type { SchemaValue } from "../../core/SchemaObject.ts";
import { SchemaObject } from "../../core/SchemaObject.ts";
import { Optional } from "../../core/Optional.ts";
import { Enum } from "../../core/Enum.ts";
import { ObjectOrList } from "../../core/ObjectOrList.ts";
import { Reference } from "../../core/Reference.ts";
import type { Schema } from "../../core/Schema.ts";

export function TargetedConditionalEffect(
	effect: Schema<SchemaValue>,
	equipmentDrops = false,
) {
	return new SchemaObject("targeted_conditional_effect", {
		...(equipmentDrops
			? {
					enchanted: Enum(["attacker", "victim"]),
				}
			: {
					enchanted: Enum("equipment_slot_group"),
					affected: Optional(Enum("enchantment_target")),
				}),
		effect,
		requirements: Optional(ObjectOrList(new Reference("condition"))),
	});
}

export default TargetedConditionalEffect;
