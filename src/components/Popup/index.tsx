import { HTMLAttributes } from 'react'
import css from './style.module.css'
import { Button, CloseIcon } from '../'

export const Popup = ({ id, children, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={css.popup} popover="auto" id={id} {...props}>
			{children}
			<Button popoverTarget={id} popoverTargetAction="hide" className={css.closeBtn}>
				<CloseIcon />
			</Button>
		</div>
	)
}
