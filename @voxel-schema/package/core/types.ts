export const Switch = Symbol("switch");
export const Case = Symbol("case");
export const Nothing = Symbol("nothing");

export type SwitchCase<T> = {
	[Switch]: string;
	[Case]: Record<string, T>;
};
