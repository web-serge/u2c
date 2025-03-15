import { ComponentProps } from 'react'
import css from './styles.module.css'
import { clsx } from 'clsx'

type Props = {
	error?: string
	label?: string
} & ComponentProps<'input'>
export const Input = ({ className, error, label, ...props }: Props) => {
	return (
		<div className={css.inputWrapper}>
			<label>
				{label && <div className={css.label}>{label}</div>}
				<input className={clsx(css.input, error && css.error, className)} {...props} />
				{error && <span className={css.errorMessage}>{error}</span>}
			</label>
		</div>
	)
}
