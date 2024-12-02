import type { Schema } from "./Schema.ts";
import type { SchemaValue } from "./SchemaObject.ts";

export class SchemaRegistry {
	private static instance: SchemaRegistry;

	private schemas: Map<string, Schema<SchemaValue>>;

	private constructor() {
		this.schemas = new Map();
	}

	public static getInstance(): SchemaRegistry {
		if (!SchemaRegistry.instance) {
			SchemaRegistry.instance = new SchemaRegistry();
		}
		return SchemaRegistry.instance;
	}

	public register(name: string, schema: Schema<SchemaValue>): void {
		this.schemas.set(name, schema);
	}

	public get(name: string): Schema<SchemaValue> | undefined {
		return this.schemas.get(name);
	}

	public has(name: string): boolean {
		return this.schemas.has(name);
	}
}
