import { assertEquals } from "jsr:@std/assert";
import { describe, it } from "jsr:@std/testing/bdd";

describe("Enchantement Schema", () => {
	const enchantementTest = {
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
		effects: {
			"minecraft:attributes": [
				{
					id: "minecraft:enchantment.aqua_affinity",
					attribute: "minecraft:submerged_mining_speed",
					amount: {
						type: "minecraft:linear",
						base: 4,
						per_level_above_first: 4,
					},
					operation: "add_multiplied_total",
				},
			],
		},
	};

	it("devrait avoir une description valide", () => {
		assertEquals(
			enchantementTest.description.translate,
			"enchantment.minecraft.aqua_affinity",
		);
	});
});
