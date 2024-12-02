import { StringSchema } from "./../../core/StringSchema.ts";
import { Reference } from "../../core/Reference.ts";
import { SchemaAlternative } from "../../core/SchemaAlternative.ts";
import { Enum } from "./../../core/Enum.ts";
import { SchemaList } from "../../core/SchemaList.ts";
import { Optional } from "../../core/Optional.ts";
import { SchemaObject } from "../../core/SchemaObject.ts";
import { STYLE_FIELDS } from "./StyleFields.ts";

export const TEXT_COMPONENT = new SchemaAlternative("text_component", [
	new Reference("text_component_object"),
	new Reference("text_component_list"),
	new StringSchema(),
]);

export const TEXT_COMPONENT_LIST = new SchemaList(
	"text_component_list",
	new Reference("text_component"),
);

export const TEXT_STYLE_OBJECT = new SchemaObject("text_style", {
	...STYLE_FIELDS,
});

export const COMMON_FIELDS = {
	...STYLE_FIELDS,
	extra: Optional(new Reference("text_component_list")),
};

export const TEXT_COMPONENT_OBJECT = new SchemaAlternative("text_component", [
	new SchemaObject("text", {
		text: new StringSchema(),
		...COMMON_FIELDS,
	}),
	new SchemaObject("text_with_style", {
		translate: new StringSchema(),
		fallback: Optional(new StringSchema()),
		with: Optional(new Reference("text_component_list")),
		...COMMON_FIELDS,
	}),
	new SchemaObject("score", {
		score: new SchemaObject("score", {
			name: new StringSchema(),
			objective: new StringSchema(),
			value: Optional(new StringSchema()),
		}),
		...COMMON_FIELDS,
	}),
	new SchemaObject("selector", {
		selector: new StringSchema(),
		separator: Optional(new Reference("text_component")),
		...COMMON_FIELDS,
	}),
	new SchemaObject("keybind", {
		keybind: Enum("keybind"),
		...COMMON_FIELDS,
	}),
]);
