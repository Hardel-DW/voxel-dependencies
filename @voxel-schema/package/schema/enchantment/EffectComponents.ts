import { SchemaObject } from "../../core/SchemaObject.ts";
import { List } from "../../core/List.ts";
import { Reference } from "../../core/Reference.ts";
import { Nothing } from "../../core/Nothing.ts";
import { ConditionalEffect } from "./ConditionalEffect.ts";
import { TargetedConditionalEffect } from "./TargetedConditionalEffect.ts";

const EFFECT_COMPONENTS = new SchemaObject("effect_components", {
	"minecraft:damage_protection": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:damage_immunity": new List(ConditionalEffect(Nothing())),
	"minecraft:damage": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:smash_damage_per_fallen_block": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:knockback": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:armor_effectiveness": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:post_attack": new List(
		TargetedConditionalEffect(new Reference("enchantment_entity_effect")),
	),
	"minecraft:hit_block": new List(
		ConditionalEffect(new Reference("enchantment_entity_effect")),
	),
	"minecraft:item_damage": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:attributes": new List(new Reference("attribute_effect_fields")),
	"minecraft:equipment_drops": new List(
		TargetedConditionalEffect(new Reference("enchantment_value_effect"), true),
	),
	"minecraft:location_changed": new List(
		ConditionalEffect(new Reference("enchantment_location_effect")),
	),
	"minecraft:tick": new List(
		ConditionalEffect(new Reference("enchantment_entity_effect")),
	),
	"minecraft:ammo_use": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:projectile_piercing": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:projectile_spawned": new List(
		ConditionalEffect(new Reference("enchantment_entity_effect")),
	),
	"minecraft:projectile_spread": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:projectile_count": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:crossbow_charge_time": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:trident_return_acceleration": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:fishing_time_reduction": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:fishing_luck_bonus": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:block_experience": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:mob_experience": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:trident_spin_attack_strength": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:repair_with_xp": new List(
		ConditionalEffect(new Reference("enchantment_value_effect")),
	),
	"minecraft:crossbow_charging_sounds": new Reference("crossbow_sounds"),
	"minecraft:trident_sound": new List(new Reference("sound_event")),
	"minecraft:prevent_equipment_drop": Nothing(),
	"minecraft:prevent_armor_change": Nothing(),
});

export default EFFECT_COMPONENTS;
