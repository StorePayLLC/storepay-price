'use client';

import {Upload, Typography, Flex, Spin} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import {useKycCreateMutation} from "@/gql/mutation/user/kyc/create.generated";
import {useRouter} from "@/components/navigation";

const { Text } = Typography;
const { Dragger } = Upload;

export default function IDUpload() {
  const [create, {loading, data}] = useKycCreateMutation({context: { upload: true }})
  const router = useRouter();

  return (
    <div>
      <Text className="text-gray-400 block mb-6">
        Please upload a clear photo of your citizen ID card. Make sure all text is readable and the image is not blurry.
      </Text>

      {loading ? (<Spin />) : (
        <Dragger
          accept="image/*"
          beforeUpload={(file) => {
            create({variables: { input: {passport: file}}}).then((res) => {
              router.push(`/user/kyc/${res.data?.kycCreate?.id}/face-recognition`)
            })
          }}
          className="border-gray-700 hover:border-gray-500 px-6 py-12"
        >
          <Flex vertical align="center" gap={16}>
            <InboxOutlined className="text-4xl text-blue-500" />
            <div>
              <Text className="text-white">Click or drag ID card to upload</Text>
              <Text className="text-gray-400 block">
                Support for a single ID card image
              </Text>
            </div>
          </Flex>
        </Dragger>
      )}

      <div className="mt-6">
        <Text type="secondary">Requirements:</Text>
        <ul className="list-disc list-inside mt-2 text-gray-400">
          <li>Clear, color image</li>
          <li>All text must be readable</li>
          <li>No glare or shadows</li>
          <li>File size under 5MB</li>
        </ul>
      </div>
    </div>
  );
}