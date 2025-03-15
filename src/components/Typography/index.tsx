import type { ComponentPropsWithoutRef, ElementType } from 'react'

import clsx from 'clsx'

import css from './style.module.css'

type TypographyVariant = 'h1' | 'body-14'

type Props<T extends ElementType> = {
	as?: T
	className?: string
	variant?: TypographyVariant
	light?: boolean
	weight?: number
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType>({
	as,
	light,
	children,
	className,
	variant = 'body-14',
	weight,
	...restProps
}: Props<T>) => {
	const Component = getComponent(variant, as)

	return (
		<Component
			className={clsx(css[variant], light && css.light, className, weight && css[`weight${weight}`])}
			{...restProps}
		>
			{children}
		</Component>
	)
}

const getComponent = <T extends ElementType>(variant: TypographyVariant, as?: T) => {
	if (as) {
		return as
	}

	switch (variant) {
		case 'h1':
			return 'h1'
		default:
			return 'div'
	}
}
