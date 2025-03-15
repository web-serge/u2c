import { ButtonHTMLAttributes } from 'react'
import css from './style.module.css'
import { clsx } from 'clsx'

type Props = {
	active?: boolean
	variant?: 'primary' | 'outlined' | 'secondary' | 'text'
	fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ active, children, className, fullWidth, variant, ...props }: Props) => {
	return (
		<button
			className={clsx(
				css.button,
				className,
				variant && css[variant],
				fullWidth && css.fullWidth,
				active && css.active
			)}
			{...props}
		>
			{children}
		</button>
	)
}
