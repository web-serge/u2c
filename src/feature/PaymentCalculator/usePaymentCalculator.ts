import { useRef, useState } from 'react'
import { LoanTermMonths } from 'src/common/enums'

type PaymentFrequency = 'month' | 'year'

export const usePaymentCalculator = () => {
	const [loanTermMonths, setLoanTermMonths] = useState<LoanTermMonths>(LoanTermMonths.Twelve)
	const [paymentFrequency, setPaymentFrequency] = useState<PaymentFrequency>('month')
	const [calculatedPayment, setCalculatedPayment] = useState<number | null>(null)
	const [errorMessage, setErrorMessage] = useState('')

	const loanAmountInputRef = useRef<HTMLInputElement>(null)

	const calculatePayment = (loanTerm: LoanTermMonths, frequency: PaymentFrequency) => {
		const loanAmount = loanAmountInputRef.current ? parseFloat(loanAmountInputRef.current.value) : NaN

		if (!isNaN(loanAmount) && loanAmount > 0) {
			const monthlyPaymentAmount = loanAmount / loanTerm
			setCalculatedPayment(
				frequency === 'month' ? monthlyPaymentAmount : monthlyPaymentAmount * LoanTermMonths.Twelve
			)
		} else {
			setErrorMessage('Поле обязательно для заполнения')
			setCalculatedPayment(null)
		}
	}

	const handleLoanTermChange = (loanTerm: LoanTermMonths) => {
		setLoanTermMonths(loanTerm)
		if (calculatedPayment) calculatePayment(loanTerm, paymentFrequency)
	}

	const handlePaymentFrequencyChange = (frequency: PaymentFrequency) => {
		setPaymentFrequency(frequency)
		if (calculatedPayment) calculatePayment(loanTermMonths, frequency)
	}

	const handleOnChangeInput = () => setErrorMessage('')

	return {
		calculatePayment,
		calculatedPayment,
		errorMessage,
		handleLoanTermChange,
		handleOnChangeInput,
		handlePaymentFrequencyChange,
		loanAmountInputRef,
		loanTermMonths,
		paymentFrequency
	}
}
