export type ComparisonCardItem = {
  id: number;
  label: string;
}

export type ComparisonCard =  {
  id: number;
  title: string;
  imageSrc: string;
  items: ComparisonCardItem[];
}