import {Select, SelectProps} from "antd";
import {languages} from "@/config/internalization";

type Props = {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  onSelectItem?: (merchant: any) => void;
}& SelectProps

export default function LanguageSelecter({onSelectItem}: Props) {
  return (
    <Select
      className="w-full bg-[#1a1a1a]"
      placeholder="Select language"
      options={Object.values(languages).map(item => {
        return {value: item.name, label: `${item.flag} ${item.name}`};
      })}
    />
  );
}