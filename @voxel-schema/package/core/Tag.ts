import type { Schema, SchemaStructure } from "./Schema.ts";
import { getRegistry } from "jsr:@voxel/registry";

export class Tag implements Schema<string> {
	constructor(private tagType: string) {}

	async validateAsync(value: unknown): Promise<boolean> {
		if (typeof value !== "string") return false;
		const tags = await getRegistry(`tag/${this.tagType}`);
		return tags.includes(value);
	}

	validate(value: unknown): value is string {
		return typeof value === "string";
	}

	getDefault(): string {
		return "";
	}

	getStructure(): SchemaStructure {
		return {
			type: "tag",
			constraints: { tagType: this.tagType },
		};
	}
}
