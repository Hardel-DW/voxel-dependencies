import { SchemaObject } from "../../core/SchemaObject.ts";
import { Optional } from "../../core/Optional.ts";
import { Tag } from "../../core/Tag.ts";
import { Reference } from "../../core/Reference.ts";
import { Registry } from "../../core/Registry.ts";
import { StringSchema } from "../../core/StringSchema.ts";
import { Switch, Case } from "../../core/types.ts";
import { List } from "../../core/List.ts";
import { BooleanSchema } from "../../core/BooleanSchema.ts";
import { SchemaMap } from "../../core/SchemaMap.ts";
import { NumberSchema } from "../../core/NumberSchema.ts";
import { SchemaAlternative } from "../../core/SchemaAlternative.ts";
import { Enum } from "../../core/Enum.ts";

export const ENTITY_TYPE_SPECIFIC_PREDICATE = new SchemaObject(
	"entity_type_specific",
	{
		type: new Registry("entity_sub_predicate_type"),
		[Switch]: "type",
		[Case]: {
			"minecraft:axolotl": new SchemaObject("axolotl", {
				variant: Optional(Enum("axolotl_variant")),
			}),
			"minecraft:boat": new SchemaObject("boat", {
				variant: Optional(Enum("boat_variant")),
			}),
			"minecraft:cat": new SchemaObject("cat", {
				variant: Optional(new Tag("cat_variant")),
			}),
			"minecraft:fishing_hook": new SchemaObject("fishing_hook", {
				in_open_water: Optional(new BooleanSchema()),
			}),
			"minecraft:fox": new SchemaObject("fox", {
				variant: Optional(Enum("fox_variant")),
			}),
			"minecraft:frog": new SchemaObject("frog", {
				variant: Optional(new Tag("frog_variant")),
			}),
			"minecraft:horse": new SchemaObject("horse", {
				variant: Optional(Enum("horse_variant")),
			}),
			"minecraft:lightning": new SchemaObject("lightning", {
				blocks_set_on_fire: Optional(new Reference("int_bounds")),
				entity_struck: Optional(new Reference("entity_predicate")),
			}),
			"minecraft:llama": new SchemaObject("llama", {
				variant: Optional(Enum("llama_variant")),
			}),
			"minecraft:mooshroom": new SchemaObject("mooshroom", {
				variant: Optional(Enum("mooshroom_variant")),
			}),
			"minecraft:painting": new SchemaObject("painting", {
				variant: Optional(new Tag("painting_variant")),
			}),
			"minecraft:parrot": new SchemaObject("parrot", {
				variant: Optional(Enum("parrot_variant")),
			}),
			"minecraft:player": new SchemaObject("player", {
				gamemode: Optional(new List(Enum("gamemode"))),
				level: Optional(new Reference("int_bounds")),
				advancements: Optional(
					new SchemaMap(
						new Registry("advancement"),
						new SchemaAlternative("advancement_criteria", [
							new BooleanSchema(),
							new SchemaMap(new StringSchema(), new BooleanSchema()),
						]),
					),
				),
				recipes: Optional(
					new SchemaMap(new Registry("recipe"), new BooleanSchema()),
				),
				stats: Optional(new List(new Reference("statistic_predicate"))),
				looking_at: Optional(new Reference("entity_predicate")),
			}),
			"minecraft:rabbit": new SchemaObject("rabbit", {
				variant: Optional(Enum("rabbit_variant")),
			}),
			"minecraft:raider": new SchemaObject("raider", {
				has_raid: Optional(new BooleanSchema()),
				is_captain: Optional(new BooleanSchema()),
			}),
			"minecraft:slime": new SchemaObject("slime", {
				size: Optional(new Reference("int_bounds")),
			}),
			"minecraft:tropical_fish": new SchemaObject("tropical_fish", {
				variant: Optional(Enum("tropical_fish_variant")),
			}),
			"minecraft:villager": new SchemaObject("villager", {
				variant: Optional(new Registry("villager_type")),
			}),
			"minecraft:wolf": new SchemaObject("wolf", {
				variant: Optional(new Tag("wolf_variant")),
			}),
		},
	},
);

// Prédicat d'entité principal
export const ENTITY_PREDICATE = new SchemaObject("entity_predicate", {
	type: Optional(new Tag("entity_type")),
	type_specific: Optional(ENTITY_TYPE_SPECIFIC_PREDICATE),
	nbt: Optional(new StringSchema()), // TODO: Add NBT validation
	team: Optional(new StringSchema()), // TODO: Add team validation
	location: Optional(new Reference("location_predicate")),
	movement: Optional(new Reference("movement_predicate")),
	movement_affected_by: Optional(new Reference("location_predicate")),
	stepping_on: Optional(new Reference("location_predicate")),
	distance: Optional(new Reference("distance_predicate")),
	slots: Optional(
		new SchemaMap(Enum("slot_range"), new Reference("item_predicate")), // Todo Multiple Enum for slot_range
	),
	flags: Optional(
		new SchemaObject("entity_flags", {
			is_on_ground: Optional(new BooleanSchema()),
			is_on_fire: Optional(new BooleanSchema()),
			is_sneaking: Optional(new BooleanSchema()),
			is_sprinting: Optional(new BooleanSchema()),
			is_swimming: Optional(new BooleanSchema()),
			is_flying: Optional(new BooleanSchema()),
			is_baby: Optional(new BooleanSchema()),
		}),
	),
	equipment: Optional(
		new SchemaMap(Enum("equipment_slot"), new Reference("item_predicate")),
	),
	periodic_tick: Optional(new NumberSchema({ min: 1 })),
	vehicle: Optional(new Reference("entity_predicate")),
	passenger: Optional(new Reference("entity_predicate")),
	targeted_entity: Optional(new Reference("entity_predicate")),
	effects: Optional(
		new SchemaMap(
			new Registry("mob_effect"),
			new Reference("status_effect_predicate"),
		),
	),
});
