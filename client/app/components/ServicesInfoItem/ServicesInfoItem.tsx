import clsx from "clsx";

interface ServicesInfoItemProps {
  label: string;
  marker?: boolean;
  italic?: boolean;
}

const ServicesInfoItem = ({ label, marker, italic }: ServicesInfoItemProps) => {
  return (
    <p
      className={clsx("services-info__text", {
        italic: italic,
        marker: marker,
      })}
    >
      {label}
    </p>
  );
};

export default ServicesInfoItem;
