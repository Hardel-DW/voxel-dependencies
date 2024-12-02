import { SchemaObject } from "../../core/SchemaObject.ts";
import { Optional } from "../../core/Optional.ts";
import { Tag } from "../../core/Tag.ts";
import { Reference } from "../../core/Reference.ts";
import { SchemaMap } from "../../core/SchemaMap.ts";
import { Registry } from "../../core/Registry.ts";
import { Switch, Case } from "../../core/types.ts";
import { List } from "../../core/List.ts";
import { StringSchema } from "../../core/StringSchema.ts";
import { BooleanSchema } from "../../core/BooleanSchema.ts";

// Fonction utilitaire pour créer un prédicat de collection
function createCollectionPredicate<T>(itemSchema: Schema<T>) {
	return new SchemaObject("collection", {
		contains: Optional(new List(itemSchema)),
		count: Optional(
			new List(
				new SchemaObject("count_entry", {
					test: itemSchema,
					count: new Reference("int_bounds"),
				}),
			),
		),
		size: Optional(new Reference("int_bounds")),
	});
}

export const ITEM_PREDICATE = new SchemaObject("item_predicate", {
	items: Optional(new Tag("item")),
	count: Optional(new Reference("int_bounds")),
	components: Optional(new Reference("data_component_predicate")),
	predicates: Optional(
		new SchemaMap(
			new Registry("item_sub_predicate_type"),
			new SchemaObject("item_sub_predicate", {
				type: new Registry("item_sub_predicate_type"),
				[Switch]: "type",
				[Case]: {
					"minecraft:attribute_modifiers": new SchemaObject(
						"attribute_modifiers",
						{
							modifiers: Optional(
								createCollectionPredicate(
									new Reference("attribute_modifiers_entry_predicate"),
								),
							),
						},
					),
					"minecraft:bundle_contents": new SchemaObject("bundle_contents", {
						items: Optional(
							createCollectionPredicate(new Reference("item_predicate")),
						),
					}),
					"minecraft:container": new SchemaObject("container", {
						items: Optional(
							createCollectionPredicate(new Reference("item_predicate")),
						),
					}),
					"minecraft:custom_data": new Reference("custom_data_component"),
					"minecraft:damage": new SchemaObject("damage", {
						durability: Optional(new Reference("int_bounds")),
						damage: Optional(new Reference("int_bounds")),
					}),
					"minecraft:enchantments": new List(
						new Reference("enchantment_predicate"),
					),
					"minecraft:firework_explosion": new Reference(
						"firework_explosion_predicate",
					),
					"minecraft:fireworks": new SchemaObject("fireworks", {
						explosions: Optional(
							createCollectionPredicate(
								new Reference("firework_explosion_predicate"),
							),
						),
						flight_duration: Optional(new Reference("int_bounds")),
					}),
					"minecraft:jukebox_playable": new SchemaObject("jukebox_playable", {
						song: Optional(new Tag("jukebox_song")),
					}),
					"minecraft:potion_contents": new Tag("potion"),
					"minecraft:stored_enchantments": new List(
						new Reference("enchantment_predicate"),
					),
					"minecraft:trim": new SchemaObject("trim", {
						material: Optional(new Tag("trim_material")),
						pattern: Optional(new Tag("trim_pattern")),
					}),
					"minecraft:writable_book_content": new SchemaObject(
						"writable_book_content",
						{
							pages: Optional(createCollectionPredicate(new StringSchema())),
						},
					),
					"minecraft:written_book_content": new SchemaObject(
						"written_book_content",
						{
							pages: Optional(
								createCollectionPredicate(new Reference("text_component")),
							),
							author: Optional(new StringSchema()),
							title: Optional(new StringSchema()),
							generation: Optional(new Reference("int_bounds")),
							resolved: Optional(new BooleanSchema()),
						},
					),
				},
			}),
		),
	),
});
