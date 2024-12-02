import type { Schema, SchemaStructure } from "./Schema.ts";
import { getRegistry } from "jsr:@voxel/registry";

export class Registry implements Schema<string> {
	constructor(private registryType: string) {}

	async validateAsync(value: unknown): Promise<boolean> {
		if (typeof value !== "string") return false;
		const registry = await getRegistry(this.registryType);
		return registry.includes(value);
	}

	validate(value: unknown): value is string {
		return typeof value === "string";
	}

	getDefault(): string {
		return "";
	}

	getStructure(): SchemaStructure {
		return {
			type: "registry",
			constraints: { registryType: this.registryType },
		};
	}
}
