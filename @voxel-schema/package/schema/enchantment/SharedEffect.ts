import { Tag } from "../../core/Tag.ts";
import { Registry } from "../../core/Registry.ts";
import { Reference } from "../../core/Reference.ts";
import { FloatSchema } from "../../core/FloatSchema.ts";
import { Optional } from "../../core/Optional.ts";
import { Enum } from "../../core/Enum.ts";
import { StringSchema } from "../../core/StringSchema.ts";
import { BooleanSchema } from "../../core/BooleanSchema.ts";

export const SHARED_EFFECTS = {
	"minecraft:apply_mob_effect": {
		to_apply: new Tag("mob_effect"),
		min_duration: new Reference("level_based_value"),
		max_duration: new Reference("level_based_value"),
		min_amplifier: new Reference("level_based_value"),
		max_amplifier: new Reference("level_based_value"),
	},
	"minecraft:damage_entity": {
		damage_type: new Registry("damage_type"),
		min_damage: new Reference("level_based_value"),
		max_damage: new Reference("level_based_value"),
	},
	"minecraft:change_item_damage": {
		amount: new Reference("level_based_value"),
	},
	"minecraft:explode": {
		damage_type: Optional(new Registry("damage_type")),
		radius: new Reference("level_based_value"),
		offset: Optional(new Reference("vector3")),
		block_interaction: Enum("explosion_interaction"),
		small_particle: new Reference("particle"),
		large_particle: new Reference("particle"),
		sound: new Reference("sound_event"),
		immune_blocks: Optional(new Tag("block")),
		knockback_multiplier: Optional(new Reference("level_based_value")),
		attribute_to_user: Optional(new BooleanSchema()),
		create_fire: Optional(new BooleanSchema()),
	},
	"minecraft:ignite": {
		duration: new Reference("level_based_value"),
	},
	"minecraft:play_sound": {
		sound: new Reference("sound_event"),
		volume: new FloatSchema({ min: 1e-5, max: 10 }),
		pitch: new FloatSchema({ min: 1e-5, max: 2 }),
	},
	"minecraft:replace_block": {
		block_state: new Reference("block_state_provider"),
		predicate: Optional(new Reference("block_predicate_worldgen")),
		offset: Optional(new Reference("block_pos")),
		trigger_game_event: Optional(new Registry("game_event")),
	},
	"minecraft:replace_disk": {
		block_state: new Reference("block_state_provider"),
		predicate: Optional(new Reference("block_predicate_worldgen")),
		radius: new Reference("level_based_value"),
		height: new Reference("level_based_value"),
		offset: Optional(new Reference("block_pos")),
		trigger_game_event: Optional(new Registry("game_event")),
	},
	"minecraft:run_function": {
		function: new StringSchema(),
	},
	"minecraft:set_block_properties": {
		properties: new Map(),
		offset: Optional(new Reference("block_pos")),
		trigger_game_event: Optional(new Registry("game_event")),
	},
	"minecraft:spawn_particles": {
		particle: new Reference("particle"),
		horizontal_position: new Reference("particle_position_source"),
		vertical_position: new Reference("particle_position_source"),
		horizontal_velocity: new Reference("particle_velocity_source"),
		vertical_velocity: new Reference("particle_velocity_source"),
		speed: new Reference("float_provider"),
	},
	"minecraft:summon_entity": {
		entity: new Tag("entity_type"),
		join_team: Optional(new BooleanSchema()),
	},
};

export type SharedEffectType = keyof typeof SHARED_EFFECTS;
