import { Reference } from "./../../core/Reference.ts";
import { SchemaObject } from "../../core/SchemaObject.ts";
import { Optional } from "../../core/Optional.ts";
import { Tag } from "../../core/Tag.ts";
import { StringSchema } from "../../core/StringSchema.ts";
import { SchemaMap } from "../../core/SchemaMap.ts";
import { Registry } from "../../core/Registry.ts";
import { Switch, Case } from "../../core/types.ts";
import { List } from "../../core/List.ts";
import { BooleanSchema } from "../../core/BooleanSchema.ts";

export const CONDITION = new SchemaObject("condition", {
	condition: new Registry("loot_condition_type"),
	[Switch]: "condition",
	[Case]: {
		"minecraft:killed_by_player": new SchemaObject("killed_by_player", {}),
	},
});

export const PREDICATE = new SchemaObjectOrList(
	"predicate",
	new Reference("condition"),
);

export const FIREWORK_EXPLOSION_PREDICATE = new SchemaObject(
	"firework_explosion_predicate",
	{
		shape: Optional(new Registry("firework_explosion_shape")),
		has_trail: Optional(new BooleanSchema()),
		has_twinkle: Optional(new BooleanSchema()),
	},
);

export const ENCHANTMENT_PREDICATE = new SchemaObject("enchantment_predicate", {
	enchantments: Optional(new Tag("enchantment")),
	levels: Optional(new Reference("int_bounds")),
});

export const BLOCK_PREDICATE = new SchemaObject("block_predicate", {
	blocks: Optional(new Tag("block")),
	nbt: Optional(new StringSchema()), // TODO: Add NBT validation
	state: Optional(new SchemaMap(new StringSchema(), new StringSchema())),
});

export const FLUID_PREDICATE = new SchemaObject("fluid_predicate", {
	fluids: Optional(new Tag("fluid")),
	state: Optional(new SchemaMap(new StringSchema(), new StringSchema())),
});

export const LOCATION_PREDICATE = new SchemaObject("location_predicate", {
	position: Optional(
		new SchemaObject("position", {
			x: Optional(new Reference("float_bounds")),
			y: Optional(new Reference("float_bounds")),
			z: Optional(new Reference("float_bounds")),
		}),
	),
	biomes: Optional(new Tag("worldgen/biome")),
	structures: Optional(new Tag("worldgen/structure")),
	dimension: Optional(new Registry("dimension")),
	light: Optional(
		new SchemaObject("light", {
			light: Optional(new Reference("int_bounds")),
		}),
	),
	smokey: Optional(new BooleanSchema()),
	can_see_sky: Optional(new BooleanSchema()),
	block: Optional(new Reference("block_predicate")),
	fluid: Optional(new Reference("fluid_predicate")),
});

export const STATISTIC_PREDICATE = new SchemaObject("statistic_predicate", {
	type: new Registry("stat_type"),
	stat: new StringSchema(),
	value: Optional(new Reference("int_bounds")),
	[Switch]: "type",
	[Case]: {
		"minecraft:mined": new SchemaObject("mined", {
			stat: new Registry("block"),
		}),
		"minecraft:crafted": new SchemaObject("crafted", {
			stat: new Registry("item"),
		}),
		"minecraft:used": new SchemaObject("used", {
			stat: new Registry("item"),
		}),
		"minecraft:broken": new SchemaObject("broken", {
			stat: new Registry("item"),
		}),
		"minecraft:picked_up": new SchemaObject("picked_up", {
			stat: new Registry("item"),
		}),
		"minecraft:dropped": new SchemaObject("dropped", {
			stat: new Registry("item"),
		}),
		"minecraft:killed": new SchemaObject("killed", {
			stat: new Registry("entity_type"),
		}),
		"minecraft:killed_by": new SchemaObject("killed_by", {
			stat: new Registry("entity_type"),
		}),
		"minecraft:custom": new SchemaObject("custom", {
			stat: new Registry("custom_stat"),
		}),
	},
});

export const STATUS_EFFECT_PREDICATE = new SchemaObject(
	"status_effect_predicate",
	{
		amplifier: Optional(new Reference("int_bounds")),
		duration: Optional(new Reference("int_bounds")),
		ambient: Optional(new BooleanSchema()),
		visible: Optional(new BooleanSchema()),
	},
);

export const DISTANCE_PREDICATE = new SchemaObject("distance_predicate", {
	x: Optional(new Reference("float_bounds")),
	y: Optional(new Reference("float_bounds")),
	z: Optional(new Reference("float_bounds")),
	absolute: Optional(new Reference("float_bounds")),
	horizontal: Optional(new Reference("float_bounds")),
});

export const MOVEMENT_PREDICATE = new SchemaObject("movement_predicate", {
	x: Optional(new Reference("float_bounds")),
	y: Optional(new Reference("float_bounds")),
	z: Optional(new Reference("float_bounds")),
	speed: Optional(new Reference("float_bounds")),
	horizontal_speed: Optional(new Reference("float_bounds")),
	vertical_speed: Optional(new Reference("float_bounds")),
	fall_distance: Optional(new Reference("float_bounds")),
});

export const DAMAGE_SOURCE_PREDICATE = new SchemaObject(
	"damage_source_predicate",
	{
		tags: Optional(
			new List(
				new SchemaObject("tag_predicate", {
					id: new Tag("damage_type"),
					expected: new BooleanSchema(),
				}),
			),
		),
		source_entity: Optional(new Reference("entity_predicate")),
		direct_entity: Optional(new Reference("entity_predicate")),
		is_direct: Optional(new BooleanSchema()),
	},
);

export const DAMAGE_PREDICATE = new SchemaObject("damage_predicate", {
	dealt: Optional(new Reference("float_bounds")),
	taken: Optional(new Reference("float_bounds")),
	blocked: Optional(new BooleanSchema()),
	source_entity: Optional(new Reference("entity_predicate")),
	type: Optional(new Reference("damage_source_predicate")),
});
