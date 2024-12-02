import { SchemaObject } from "../../core/SchemaObject.ts";
import { Enum } from "../../core/Enum.ts";
import { Switch, Case } from "../../core/types.ts";
import { Optional } from "../../core/Optional.ts";
import { Reference } from "../../core/Reference.ts";
import { Nothing } from "../../core/Nothing.ts";
import { NumberSchema } from "../../core/NumberSchema.ts";

const PARTICLE_POSITION_SOURCE = new SchemaObject("particle_position_source", {
	type: Enum(["entity_position", "in_bounding_box"]),
	offset: Optional(new Reference("vector3")),
	[Switch]: "type",
	[Case]: {
		"minecraft:entity_position": Nothing(),
		"minecraft:in_bounding_box": {
			scale: Optional(new NumberSchema({ min: 0 })),
		},
	},
});

export default PARTICLE_POSITION_SOURCE;
