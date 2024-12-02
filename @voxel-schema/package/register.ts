import { SchemaRegistry } from "./core/SchemaRegistry.ts";
import ENCHANTMENT from "./schema/enchantment/Enchantment.ts";
import ENCHANTMENT_VALUE_EFFECT from "./schema/enchantment/EnchantmentValueEffect.ts";
import ATTRIBUTE_EFFECT from "./schema/enchantment/AttributeEffect.ts";
import ENCHANTMENT_COST from "./schema/enchantment/EnchantmentCost.ts";
import EFFECT_COMPONENTS from "./schema/enchantment/EffectComponents.ts";
import ENCHANTMENT_PROVIDER from "./schema/enchantment/EnchantmentProvider.ts";
import PARTICLE from "./schema/enchantment/ParticlePositionSource.ts";
import VELOCITY_SOURCE from "./schema/enchantment/ParticleVelocitySource.ts";
import LOCATION from "./schema/enchantment/EnchantmentLocationEffect.ts";
import TARGETED from "./schema/enchantment/TargetedConditonalEffect.ts";
import ENCHANTMENT_LOCATION_EFFECT from "./schema/enchantment/EnchantmentEntityEffect.ts";
import ENCHANTMENT_EFFECTS from "./schema/enchantment/EnchantmentLocationEffect.ts";

const registry = SchemaRegistry.getInstance();
registry.register("enchantment", ENCHANTMENT);
registry.register("enchantment_value_effect", ENCHANTMENT_VALUE_EFFECT);
registry.register("attribute_effect", ATTRIBUTE_EFFECT);
registry.register("enchantment_cost", ENCHANTMENT_COST);
registry.register("effect_components", EFFECT_COMPONENTS);
registry.register("enchantment_provider", ENCHANTMENT_PROVIDER);
registry.register("particle", PARTICLE);
registry.register("velocity_source", VELOCITY_SOURCE);
registry.register("location", LOCATION);
registry.register("targeted", TARGETED);
registry.register("enchantment_location_effect", ENCHANTMENT_LOCATION_EFFECT);
registry.register("enchantment_effects", ENCHANTMENT_EFFECTS);

export default registry;
