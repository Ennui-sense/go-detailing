import clsx from "clsx";
import "./Loader.scss";

interface LoaderProps {
  variant?: "boot" | "overlay";
}

const Loader = ({ variant = "overlay" }: LoaderProps) => {
  return (
    <div className={clsx("loader", `loader--${variant}`)} aria-busy="true">
      <div className="loader__spinner" />
    </div>
  );
};

export default Loader;