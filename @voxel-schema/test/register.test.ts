import { assertEquals, assertThrows } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";
import registry from "../package/register.ts";

describe("Schema Registry", () => {
	it("should retrieve registered enchantment schema", () => {
		const schema = registry.get("enchantment");
		assertEquals(schema !== undefined, true);
	});

	it("should validate valid enchantment object", () => {
		const schema = registry.get("enchantment");
		const validEnchantment = {
			description: {
				translate: "enchantment.minecraft.aqua_affinity",
			},
			supported_items: "#minecraft:enchantable/head_armor",
			weight: 2,
			max_level: 1,
			min_cost: {
				base: 1,
				per_level_above_first: 0,
			},
			max_cost: {
				base: 41,
				per_level_above_first: 0,
			},
			anvil_cost: 4,
			slots: ["head"],
		};

		assertEquals(schema?.validate(validEnchantment), true);
	});

	it("should reject invalid enchantment object", () => {
		const schema = registry.get("enchantment");
		const invalidEnchantment = {
			description: "invalid_description", // Should be an object
			supported_items: 123, // Should be a string
			weight: "invalid", // Should be a number
			max_level: 0, // Should be >= 1
			min_cost: {
				base: -1, // Should be >= 0
			},
			anvil_cost: -1, // Should be >= 0
			slots: "invalid", // Should be an array
		};

		assertEquals(schema?.validate(invalidEnchantment), false);
	});

	it("should throw when getting non-existent schema", () => {
		assertThrows(
			() => {
				const result = registry.get("non_existent_schema");
				if (!result) throw new Error("Schema 'non_existent_schema' not found");
			},
			Error,
			"Schema 'non_existent_schema' not found",
		);
	});

	it("should validate enchantment value effect", () => {
		const schema = registry.get("enchantment_value_effect");
		const validEffect = {
			type: "minecraft:add",
			value: {
				type: "minecraft:linear",
				base: 1,
				per_level_above_first: 1,
			},
		};

		assertEquals(schema?.validate(validEffect), true);
	});

	it("should validate attribute effect", () => {
		const schema = registry.get("attribute_effect");
		const validEffect = {
			id: "minecraft:attack_damage",
			attribute: "minecraft:attack_damage",
			amount: {
				type: "minecraft:linear",
				base: 1,
				per_level_above_first: 0.5,
			},
			operation: "add_multiplied_total",
		};

		assertEquals(schema?.validate(validEffect), true);
	});

	it("should validate effect components", () => {
		const schema = registry.get("effect_components");
		const validComponents = {
			"minecraft:attributes": [
				{
					id: "minecraft:attack_damage",
					attribute: "minecraft:attack_damage",
					amount: {
						type: "minecraft:linear",
						base: 1,
						per_level_above_first: 0.5,
					},
					operation: "add_multiplied_total",
				},
			],
		};

		assertEquals(schema?.validate(validComponents), true);
	});
});
