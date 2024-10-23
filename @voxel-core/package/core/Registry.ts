import type { Identifier } from "./Identifier.ts";

export type RegistryElement<RegistryType> = {
    data: RegistryType;
    identifier: Identifier;
};
