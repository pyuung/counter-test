import './styles/index.scss'

const counterValue = document.getElementById('value') as HTMLSpanElement
const btnDecrease = document.getElementById('decrease-btn') as HTMLButtonElement
const btnIncrease = document.getElementById('increase-btn') as HTMLButtonElement
const btnReset = document.getElementById('reset-btn') as HTMLButtonElement

const onChangeValue = (changeValue: number) => () => {
  const currValue = counterValue.textContent
  if (currValue === '0' && changeValue < 0) return
  if (currValue === '10' && changeValue > 0) return
  const result = Number(currValue) + changeValue
  counterValue.innerHTML = String(result)
}

const onResetValue = () => (counterValue.innerHTML = '0')

btnDecrease.onclick = onChangeValue(-1)
btnIncrease.onclick = onChangeValue(1)
btnReset.onclick = onResetValue
