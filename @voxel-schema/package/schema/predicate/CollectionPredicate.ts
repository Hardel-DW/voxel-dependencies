import { SchemaObject } from "../../core/SchemaObject.ts";
import { Optional } from "../../core/Optional.ts";
import { List } from "../../core/List.ts";
import { Reference } from "../../core/Reference.ts";

export const COLLECTION_PREDICATE = new SchemaObject("collection_predicate", {
	contains: Optional(new List(new Reference("item_predicate"))), // TODO: change to predicate
	count: Optional(
		new List(
			new SchemaObject("count_entry", {
				test: new Reference("item_predicate"), // TODO: change to predicate
				count: new Reference("int_bounds"),
			}),
		),
	),
	size: Optional(new Reference("int_bounds")),
});
