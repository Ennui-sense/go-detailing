import "./BurgerButton.scss"

interface BurgerButtonProps {
	onClick: () => void
}

const BurgerButton = ({onClick}: BurgerButtonProps) => {
	return (
		<button type="button" className="burger-button" onClick={onClick}>
			<span className="burger-button__line"></span>
			<span className="burger-button__line"></span>
			<span className="burger-button__line"></span>

			<span className="visually-hidden">Открыть меню</span>
		</button>
	)
}

export default BurgerButton