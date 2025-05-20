import {useUser} from "@/utils/providers";
import {KycState} from "@/gql/graphql";
import {Tag} from "antd";
import {useRouter} from "@/components/navigation";

export default function UserState() {
  const {user} = useUser();
  const router = useRouter();
  if (user?.state === KycState.Verified) return null;

  return (
    <Tag color="warning" onClick={() => router.push('/user/kyc/register')} className="cursor-pointer w-full text-center py-5 mb-5">You are not verified. Please verify your account</Tag>
  )
}