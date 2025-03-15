import { Button } from './components'
import { PaymentCalculator } from './feature'
import { useId } from 'react'

function App() {
	const popupId = useId()

	return (
		<>
			<PaymentCalculator popupId={popupId} />
			<Button variant="outlined" popoverTarget={popupId} popoverTargetAction="show">
				Расчет платежей
			</Button>
		</>
	)
}

export default App
