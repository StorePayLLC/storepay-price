import {Button, Card, Divider, Flex, Form, Input, Select, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import React from "react";
import {useUser} from "@/utils/providers";

const { Title, Text } = Typography;
const { Option } = Select;
export default function ProfileForm() {
  const {user} = useUser();
  const [form] = Form.useForm();
  return (
    <div className="md:w-2/3">
      <Card className="bg-[#111] border border-gray-800">
        <Form layout="vertical" form={form} initialValues={user}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              label={<span className="text-gray-300">Display Name</span>}
              className="mb-4"
            >
              <Input
                prefix={<UserOutlined />}
                defaultValue="John Doe"
                className="bg-[#1a1a1a] border-gray-700 text-white"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-gray-300">Preferred Currency</span>}
              className="mb-4"
            >
              <Select
                defaultValue="usd"
                className="w-full bg-[#1a1a1a] text-white"
              >
                <Option value="usd">USD - US Dollar</Option>
                <Option value="eur">EUR - Euro</Option>
                <Option value="gbp">GBP - British Pound</Option>
                <Option value="jpy">JPY - Japanese Yen</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label={<span className="text-gray-300">Email Address</span>}
              className="mb-4"
            >
              <Input
                defaultValue="john.doe@example.com"
                className="bg-[#1a1a1a] border-gray-700 text-white"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-gray-300">Time Zone</span>}
              className="mb-4"
            >
              <Select
                defaultValue="et"
                className="w-full bg-[#1a1a1a] text-white"
              >
                <Option value="et">Eastern Time (UTC-5)</Option>
                <Option value="pt">Pacific Time (UTC-8)</Option>
                <Option value="utc">UTC (GMT)</Option>
                <Option value="cet">Central European Time (UTC+1)</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label={<span className="text-gray-300">Phone Number</span>} className="mb-4"
            >
              <Input
                defaultValue="+1 (555) 123-4567"
                className="bg-[#1a1a1a] border-gray-700 text-white"
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-gray-300">Language</span>}
              className="mb-4"
            >
              <Select
                defaultValue="en"
                className="w-full bg-[#1a1a1a] text-white"
              >
                <Option value="en">English</Option>
                <Option value="es">Spanish</Option>
                <Option value="fr">French</Option>
                <Option value="de">German</Option>
              </Select>
            </Form.Item>
          </div>

          <Divider className="my-4 border-gray-800" />

          <Title level={5} className="text-white mb-4">
            Connected Accounts
          </Title>

          <Flex justify="flex-end" gap={12} className="mt-6">
            <Button className="text-white border-gray-700 hover:border-gray-500">
              Cancel
            </Button>
            <Button type="primary" className="bg-blue-600">
              Save Changes
            </Button>
          </Flex>
        </Form>
      </Card>
    </div>
  )
}