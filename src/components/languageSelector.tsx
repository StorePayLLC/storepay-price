import {Select, SelectProps} from "antd";
import {languages} from "@/config/internalization";

type Props = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onSelectItem?: (merchant: any) => void;
  selected?: string;
}& SelectProps

export default function LanguageSelector({onSelectItem, selected}: Props) {
  return (
    <Select
      className="w-full bg-[#1a1a1a]"
      placeholder="Select language"
      value={selected}
      options={Object.values(languages).map((item, index) => {
        return {value: Object.keys(languages)[index], label: `${item.flag} ${item.name}`};
      })}
    />
  );
}