<script lang="ts">
	import { KIcon } from '@ikun-ui/icon';
	import type { IKunTypePro } from '@ikun-ui/utils';
	import { createEventDispatcher } from 'svelte';
	import { clsx, type ClassValue } from 'clsx';

	export let type: IKunTypePro = 'primary';
	export let bgColor: string = '';
	export let textColor: string = '';
	export let icon: string = '';
	export let border: boolean = false;
	export let closable: boolean = false;
	export let closeIcon: string = 'i-carbon-close';
	export let cls: ClassValue = undefined;
	export let attrs: Record<string, string> = {};

	const dispatch = createEventDispatcher();

	const onClick = (event: MouseEvent) => {
		dispatch('click', event);
	};

	const onClose = (event: CustomEvent) => {
		event.detail.stopPropagation();
		dispatch('close', event);
	};

	$: cnames = clsx(
		`k-tag--base k-tag--${type}`,
		{
			[`k-tag--${type}__border`]: border
		},
		cls
	);
</script>

<span
	class={cnames}
	{...attrs}
	aria-hidden="true"
	style="background-color: {bgColor}; color: {textColor}"
	on:click={onClick}
>
	{#if icon}
		<KIcon
			cls={['k-tag--icon__has-slot', { 'k-tag--icon__has-slot': $$slots.default }]}
			{icon}
			width="0.8rem"
			height="0.8rem"
			color={`k-tag--${type}__icon`}
		/>
	{/if}
	<slot />
	{#if closable}
		<KIcon
			cls="k-tag--close-icon {`k-tag--${type}__close-icon`}"
			icon={closeIcon}
			width="0.8rem"
			height="0.8rem"
			color={`k-tag--${type}__icon`}
			on:click={onClose}
		/>
	{/if}
</span>
