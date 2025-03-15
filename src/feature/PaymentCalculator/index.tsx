import { Button, Input, Popup, Typography } from 'src/components'
import css from './style.module.css'
import { usePaymentCalculator } from './usePaymentCalculator'
import { LoanTermMonths } from 'src/common/enums'

type Props = {
	popupId: string
}

export const PaymentCalculator = ({ popupId }: Props) => {
	const {
		loanTermMonths,
		calculatePayment,
		loanAmountInputRef,
		handleOnChangeInput,
		errorMessage,
		paymentFrequency,
		handleLoanTermChange,
		calculatedPayment,
		handlePaymentFrequencyChange
	} = usePaymentCalculator()

	return (
		<Popup id={popupId}>
			<Typography variant="h1">Платежи по кредиту</Typography>
			<Typography as="p" variant="body-14" light>
				Введите сумму кредита и выберите срок, на который вы хотите его оформить. Мы автоматически рассчитаем
				для вас ежемесячный платеж, чтобы вы могли лучше спланировать свои финансы.
			</Typography>
			<Input
				placeholder="Введите данные"
				type="number"
				error={errorMessage}
				min={0}
				className={css.input}
				ref={loanAmountInputRef}
				label="Ваша сумма кредита"
				onChange={handleOnChangeInput}
			/>
			<Button
				variant="text"
				className={css.calculateBtn}
				onClick={() => calculatePayment(loanTermMonths, paymentFrequency)}
			>
				Рассчитать
			</Button>
			<div className={css.NumberMonthsVariants}>
				<Typography variant="body-14" weight={500}>
					Количество месяцев?
				</Typography>
				<div className={css.btnGroup}>
					{Object.values(LoanTermMonths).map(
						(month) =>
							typeof month === 'number' && (
								<Button
									key={month}
									active={loanTermMonths === month}
									onClick={() => handleLoanTermChange(month)}
									variant="secondary"
								>
									{month}
								</Button>
							)
					)}
				</div>
			</div>
			{calculatedPayment && (
				<>
					<Typography variant="body-14" weight={500} className={css.resultTitle}>
						Итого ваш платеж по кредиту:
					</Typography>
					<Button
						active={paymentFrequency === 'year'}
						onClick={() => handlePaymentFrequencyChange('year')}
						className={css.durationBtn}
						variant="secondary"
					>
						в год
					</Button>
					<Button
						active={paymentFrequency === 'month'}
						onClick={() => handlePaymentFrequencyChange('month')}
						className={css.durationBtn}
						variant="secondary"
					>
						в месяц
					</Button>
					{calculatedPayment && (
						<div className={css.result}>
							{new Intl.NumberFormat('ru-RU', {
								style: 'currency',
								currency: 'RUB',
								currencyDisplay: 'symbol'
							}).format(calculatedPayment)}
						</div>
					)}
				</>
			)}
			<Button variant="primary" fullWidth>
				Добавить
			</Button>
		</Popup>
	)
}
