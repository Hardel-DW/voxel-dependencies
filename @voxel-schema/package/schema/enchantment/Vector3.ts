import { SchemaObject } from "../../core/SchemaObject.ts";
import { Float } from "../../core/FloatSchema.ts";

const VECTOR3 = new SchemaObject("vector3", {
	x: Float(),
	y: Float(),
	z: Float(),
});

export default VECTOR3;
