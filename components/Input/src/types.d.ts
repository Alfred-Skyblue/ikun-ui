/// <reference types="svelte" />
import type { ClassValue } from 'clsx';

export type KInputProps = {
	size: 'sm' | 'md' | 'lg';
	value: string;
	placeholder: string;
	disabled: boolean;
	iconPrefix: string;
	iconSuffix: string;
	isError: boolean;
	errorMsg: string;
	cls: ClassValue;
	attrs: Record<string, string>;
	useCompositionInput: boolean;
};
