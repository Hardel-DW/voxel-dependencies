import { SchemaObject } from "../core/SchemaObject.ts";
import { Reference } from "../core/Reference.ts";
import { NumberSchema } from "../core/NumberSchema.ts";

export const JUKEBOX_SONG = new SchemaObject("jukebox_song", {
	sound_event: new Reference("sound_event"),
	description: new Reference("text_component"),
	length_in_seconds: new NumberSchema({ min: 1 }),
	comparator_output: new NumberSchema({ min: 0, max: 15 }),
});
