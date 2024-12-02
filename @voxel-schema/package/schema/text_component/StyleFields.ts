import { Registry } from "./../../core/Registry.ts";
import { Switch, Case } from "./../../core/types.ts";
import { SchemaObject } from "../../core/SchemaObject.ts";
import { StringSchema } from "../../core/StringSchema.ts";
import { BooleanSchema } from "../../core/BooleanSchema.ts";
import { Enum } from "../../core/Enum.ts";
import { Optional } from "../../core/Optional.ts";
import { Reference } from "../../core/Reference.ts";
import { SchemaAlternative } from "../../core/SchemaAlternative.ts";

export const STYLE_FIELDS = {
	color: Optional(new StringSchema()), // TODO: Add specific validation if needed
	font: Optional(new Registry("font")),
	bold: Optional(new BooleanSchema()),
	italic: Optional(new BooleanSchema()),
	underlined: Optional(new BooleanSchema()),
	strikethrough: Optional(new BooleanSchema()),
	obfuscated: Optional(new BooleanSchema()),
	insertion: Optional(new StringSchema()),
	clickEvent: Optional(
		new SchemaObject("click_event", {
			action: Enum([
				"open_url",
				"open_file",
				"run_command",
				"suggest_command",
				"change_page",
				"copy_to_clipboard",
			]),
			[Switch]: "action",
			[Case]: {
				change_page: {
					value: new StringSchema(),
				},
				copy_to_clipboard: {
					value: new StringSchema(),
				},
				open_file: {
					value: new StringSchema(),
				},
				open_url: {
					value: new StringSchema(),
				},
				run_command: {
					value: new StringSchema(), // Add command validation if needed
				},
				suggest_command: {
					value: new StringSchema(), // Add command validation if needed
				},
			},
		}),
	),
	hoverEvent: Optional(
		new SchemaObject("hover_event", {
			action: Enum(["show_text", "show_item", "show_entity"]),
			[Switch]: "action",
			[Case]: {
				show_text: {
					value: Optional(new Reference("text_component")),
					contents: Optional(new Reference("text_component")),
				},
				show_item: {
					value: Optional(new StringSchema()), // Add NBT validation if needed
					contents: Optional(
						new SchemaAlternative("item_contents", [
							new Reference("item_non_air"),
							new Reference("item_stack"),
						]),
					),
				},
				show_entity: {
					value: Optional(new StringSchema()),
					contents: Optional(
						new SchemaObject("entity_contents", {
							name: Optional(new Reference("text_component")),
							type: new Registry("entity_type"),
							id: new StringSchema(), // Add UUID validation if needed
						}),
					),
				},
			},
		}),
	),
};
