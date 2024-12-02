export interface Schema<T> {
	validate(value: unknown): value is T;
	validateAsync?(value: unknown): Promise<boolean>;
	getDefault(): T;
	getStructure(): SchemaStructure;
}

export type SchemaConstraint =
	| string
	| number
	| boolean
	| null
	| SchemaConstraint[]
	| { [key: string]: SchemaConstraint }
	| SchemaStructure;

export interface SchemaStructure {
	type: string;
	constraints?: Record<string, SchemaConstraint>;
	properties?: Record<string, SchemaStructure>;
}
