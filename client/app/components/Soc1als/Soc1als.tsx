import clsx from "clsx";
import "./Soc1als.scss";

interface Soc1alsProps {
	className: string;
}

const Soc1als = ({className}: Soc1alsProps) => {
	return (
		<div className={clsx("soc1als", className)}>
			<button>кнопка</button>
			<button>кнопка</button>
			<button>кнопка</button>
		</div>
	)
}

export default Soc1als