export type FilterOption = {
  key: string;
  text: string;
};

export type FilterProps = {
  options: FilterOption[];
  selected: string;
  onChange: (key: string) => void;
};

export type FilterItemProps = {
  value: string;
  text: string;
  selected: boolean;
  onSelected: (key: string) => void;
};
