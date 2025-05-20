'use client';

import {Form, Input, DatePicker, Select, Button, Typography, App, Skeleton} from 'antd';
import {useUser} from "@/utils/providers";
import {useUserVerifyMutation} from "@/gql/mutation/user/verify.generated";
import {useRouter} from "@/components/navigation";
import {useGetUserKycsQuery} from "@/gql/mutation/user/kyc/userKycs.generated";
import {useParams} from "next/navigation";

const { Text } = Typography;

export default function UserForm() {
  const [form] = Form.useForm();
  const [verify, {loading}] = useUserVerifyMutation();
  const {user} = useUser();
  const router = useRouter();
  const {notification} = App.useApp();
  const params = useParams();
  const {data, loading: fetching} = useGetUserKycsQuery({variables: {filter: {id: {eq: params.id as string}}}})
  const kyc = data?.me?.kycs?.nodes[0];

  if (fetching) {
    return <Skeleton />
  }

  return (
    <div>
      <Text className="text-gray-400 block mb-6">
        Please verify the information extracted from your ID. Make corrections if needed.
      </Text>

      <Form
        form={form}
        layout="vertical"
        initialValues={{}}
        onFinish={(values) => {
          verify({variables: {input: {id: user!.id, ...values}}}).then(() => {
            notification.success({message: "Verification successful", description: "Your information has been verified successfully."});
            router.push('/user/profile');
          })
        }}
      >
        <Form.Item
          initialValue={kyc?.preferences?.document_number}
          name="citizen_id_number"
          label={<span className="text-gray-300">Citizen ID Number</span>}
          rules={[{ required: true, message: 'Please enter your citizen ID number' }]}
        >
          <Input
            className="bg-[#1a1a1a] border-gray-700 text-white"
            placeholder="Enter citizen ID number"
          />
        </Form.Item>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            initialValue={kyc?.preferences?.first_name}
            name="firstname"
            label={<span className="text-gray-300">First Name</span>}
            rules={[{ required: true, message: 'Please enter your first name' }]}
          >
            <Input
              className="bg-[#1a1a1a] border-gray-700 text-white"
              placeholder="Enter first name"
            />
          </Form.Item>

          <Form.Item
            name="lastname"
            initialValue={kyc?.preferences?.last_name}
            label={<span className="text-gray-300">Last Name</span>}
            rules={[{ required: true, message: 'Please enter your last name' }]}
          >
            <Input
              className="bg-[#1a1a1a] border-gray-700 text-white"
              placeholder="Enter last name"
            />
          </Form.Item>
        </div>

        <Form.Item
          name="date_of_birth"
          label={<span className="text-gray-300">Date of Birth</span>}
          rules={[{ required: true, message: 'Please select your date of birth' }]}
        >
          <DatePicker
            className="w-full bg-[#1a1a1a] border-gray-700 text-white"
            placeholder="Select date of birth"
          />
        </Form.Item>

        <Form.Item
          name="nationality"
          label={<span className="text-gray-300">Nationality</span>}
          rules={[{ required: true, message: 'Please select your nationality' }]}
        >
          <Select
            className="w-full bg-[#1a1a1a]"
            placeholder="Select nationality"
            options={[
              { value: 'United States', label: 'United States' },
              { value: 'United Kingdom', label: 'United Kingdom' },
              { value: 'Canada', label: 'Canada' },
              { value: 'Australia', label: 'Australia' },
              // Add more countries as needed
            ]}
          />
        </Form.Item>

        <Form.Item
          name="preferred_language"
          label={<span className="text-gray-300">Preferred Language</span>}
          rules={[{ required: true, message: 'Please select your preferred language' }]}
        >
          <Select
            className="w-full bg-[#1a1a1a]"
            placeholder="Select language"
            options={[
              { value: 'en', label: 'English' },
              { value: 'es', label: 'Spanish' },
              { value: 'fr', label: 'French' },
              { value: 'de', label: 'German' },
              // Add more languages as needed
            ]}
          />
        </Form.Item>

        <Form.Item
          name="civil_id"
          label={<span className="text-gray-300">Civil ID</span>}
          rules={[{ required: true, message: 'Please enter your civil ID' }]}
        >
          <Input
            className="bg-[#1a1a1a] border-gray-700 text-white"
            placeholder="Enter civil ID"
          />
        </Form.Item>

        <Form.Item className="mb-0">
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full bg-blue-600"
            size="large"
          >
            Submit Verification
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}