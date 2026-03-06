import "./Soc1alsButton.scss"

interface Soc1alsButtonProps {
	Icon: React.FC<React.SVGProps<SVGSVGElement>>
	title: string;
}

const Soc1alsButton = ({Icon, title}: Soc1alsButtonProps) => {
	return (
		<button type="button" className="soc1als-button">
			<Icon/>

			<span className="visually-hidden">{title}</span>
		</button>
	)
}

export default Soc1alsButton