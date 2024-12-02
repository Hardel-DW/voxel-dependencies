import type { SchemaValue } from "../../core/SchemaObject.ts";
import { SchemaObject } from "../../core/SchemaObject.ts";
import { Reference } from "../../core/Reference.ts";
import { Optional } from "../../core/Optional.ts";
import { ObjectOrList } from "../../core/ObjectOrList.ts";
import type { Schema } from "../../core/Schema.ts";

export function ConditionalEffect(effect: Schema<SchemaValue>) {
	return new SchemaObject("conditional_effect", {
		effect,
		requirements: Optional(ObjectOrList(new Reference("condition"))),
	});
}

export default ConditionalEffect;
