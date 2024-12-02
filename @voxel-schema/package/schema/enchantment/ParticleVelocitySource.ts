import { SchemaObject } from "../../core/SchemaObject.ts";
import { Optional } from "../../core/Optional.ts";
import { Reference } from "../../core/Reference.ts";
import { NumberSchema } from "../../core/NumberSchema.ts";

const PARTICLE_VELOCITY_SOURCE = new SchemaObject("particle_velocity_source", {
	base: Optional(new Reference("float_provider")),
	movement_scale: Optional(new NumberSchema()),
});

export default PARTICLE_VELOCITY_SOURCE;
