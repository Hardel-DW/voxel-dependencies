import type { Schema, SchemaStructure } from "./Schema.ts";
import type { SchemaValue } from "./SchemaObject.ts";
import { SchemaRegistry } from "./SchemaRegistry.ts";

export class Reference<T extends SchemaValue = SchemaValue>
	implements Schema<T>
{
	private registry: SchemaRegistry;

	constructor(private schemaName: string) {
		this.registry = SchemaRegistry.getInstance();
	}

	private getReferencedSchema(): Schema<T> | undefined {
		return this.registry.get(this.schemaName) as Schema<T>;
	}

	validate(value: unknown): value is T {
		const schema = this.getReferencedSchema();
		if (!schema) {
			throw new Error(`Schema '${this.schemaName}' not found in registry`);
		}
		return schema.validate(value);
	}

	getDefault(): T {
		const schema = this.getReferencedSchema();
		if (!schema) {
			throw new Error(`Schema '${this.schemaName}' not found in registry`);
		}
		return schema.getDefault();
	}

	getStructure(): SchemaStructure {
		return {
			type: "reference",
			constraints: { schemaName: this.schemaName },
			// TODO: Ajouter les contraintes de structure si nécessaire
		};
	}
}
