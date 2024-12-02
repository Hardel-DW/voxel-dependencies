import { Registry } from "./../core/Registry.ts";
import { SchemaObject } from "../core/SchemaObject.ts";
import { BooleanSchema } from "../core/BooleanSchema.ts";
import { NumberSchema } from "../core/NumberSchema.ts";
import { Optional } from "../core/Optional.ts";
import { Enum } from "../core/Enum.ts";

export const DIMENSION_TYPE = new SchemaObject("dimension_type", {
	ultrawarm: new BooleanSchema(),
	natural: new BooleanSchema(),
	piglin_safe: new BooleanSchema(),
	respawn_anchor_works: new BooleanSchema(),
	bed_works: new BooleanSchema(),
	has_raids: new BooleanSchema(),
	has_skylight: new BooleanSchema(),
	has_ceiling: new BooleanSchema(),
	coordinate_scale: new NumberSchema({ min: 0.00001, max: 30000000 }),
	ambient_light: new NumberSchema(),
	fixed_time: Optional(new NumberSchema()),
	logical_height: new NumberSchema({ min: 0, max: 4064 }),
	effects: Optional(
		Enum(["minecraft:overworld", "minecraft:the_nether", "minecraft:the_end"]),
	),
	infiniburn: new Registry("block"),
	min_y: new NumberSchema({ min: -2032, max: 2031 }),
	height: new NumberSchema(),
	monster_spawn_light_level: new NumberSchema({ min: 0, max: 15 }),
	monster_spawn_block_light_limit: new NumberSchema({ min: 0, max: 15 }),
});
