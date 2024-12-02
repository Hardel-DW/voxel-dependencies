import type { Schema, SchemaStructure } from "./Schema.ts";
import type { SchemaValue } from "./SchemaObject.ts";

export class SchemaAlternative implements Schema<SchemaValue> {
	private name: string;
	private nodes: Schema<SchemaValue>[];

	constructor(name: string, nodes: Schema<SchemaValue>[]) {
		this.name = name;
		this.nodes = nodes;
	}

	validate(value: unknown): value is SchemaValue {
		for (const node of this.nodes) {
			if (node.validate(value)) {
				return true;
			}
		}
		return false;
	}

	getDefault(): SchemaValue {
		for (const node of this.nodes) {
			try {
				return node.getDefault();
			} catch {
				console.warn(`No default value for node ${node}`);
			}
		}
		return null;
	}

	getStructure(): SchemaStructure {
		const properties: Record<string, SchemaStructure> = {};
		this.nodes.forEach((node, index) => {
			properties[`node${index}`] = node.getStructure();
		});
		return {
			type: "choice",
			properties,
		};
	}
}
