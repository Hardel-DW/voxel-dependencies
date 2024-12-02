import { SchemaObject } from "../core/SchemaObject.ts";
import { StringSchema } from "../core/StringSchema.ts";
import { Tag } from "../core/Tag.ts";

export const WOLF_VARIANT = new SchemaObject("wolf_variant", {
	wild_texture: new StringSchema(),
	angry_texture: new StringSchema(),
	tame_texture: new StringSchema(),
	biomes: new Tag("worldgen/biome"),
});
