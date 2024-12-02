import { SchemaObject } from "../core/SchemaObject.ts";
import { StringSchema } from "../core/StringSchema.ts";
import { NumberSchema } from "../core/NumberSchema.ts";
import { Registry } from "../core/Registry.ts";
import { Optional } from "../core/Optional.ts";

export const DAMAGE_TYPE = new SchemaObject("damage_type", {
	message_id: new StringSchema(),
	exhaustion: new NumberSchema(),
	scaling: new Registry("damage_scaling"),
	effects: Optional(new Registry("damage_effects")),
	death_message_type: Optional(new Registry("death_message_type")),
});
