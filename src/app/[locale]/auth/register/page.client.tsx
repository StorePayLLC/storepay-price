'use client';

import {Card, Form, Input, Button, Typography, Divider, App} from 'antd';
import { MailOutlined } from '@ant-design/icons';
import Link from '@/components/link';
import {useUserRegisterMutation} from "@/gql/mutation/user/register.generated";
import {useRouter} from "@/components/navigation";

const { Title, Text } = Typography;

export default function RegisterClient() {
  const [register, {loading}]= useUserRegisterMutation();
  const {notification} = App.useApp();
  const [form] = Form.useForm();
  const router = useRouter();

  return (
    <Card className="w-full bg-[#111] border border-gray-800">
      <Title level={3} className="text-white text-center mb-6">
        Create an account
      </Title>

      <Form
        form={form}
        name="register"
        onFinish={(values) => {
          register({variables: { input: {...values}}}).then((res) => {
            notification.success({message: "Registration successful", description: "Your account has been created successfully."});
            router.push(`/auth/otp-verify/${res.data?.userRegister}`)
          })
        }}
        layout="vertical"
        requiredMark={false}
      >

        <Form.Item
          name="email"
          label={<span className="text-gray-400">Email address</span>}
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input
            size="large"
            prefix={<MailOutlined className="text-gray-400" />}
            className="bg-[#1a1a1a] border-gray-700 text-white"
            placeholder="Enter your email"
          />
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-600"
            loading={loading}
          >
            Create account
          </Button>
        </Form.Item>
      </Form>

      <Divider className="border-gray-800">
        <Text className="text-gray-500">or</Text>
      </Divider>

      <div className="text-center">
        <Text className="text-gray-400">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-blue-500 hover:text-blue-400">
            Sign in
          </Link>
        </Text>
      </div>
    </Card>
  );
}