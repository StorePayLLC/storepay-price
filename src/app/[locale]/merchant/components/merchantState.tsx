import {useMerchant} from "@/utils/providers";
import {State} from "@/gql/graphql";
import {Tag} from "antd";
import {useRouter} from "@/components/navigation";

export default function MerchantState() {
  const {merchant} = useMerchant()
  const router = useRouter();

  if (!merchant) return null;
  if (merchant?.state === State.Verified) return null;

  return (
    <Tag color="warning" onClick={() => router.push(`/merchant/kyb/${merchant.id}`)} className="cursor-pointer w-full text-center py-5 mb-5">The merchant is not verified. Please verify your account</Tag>
  )
}