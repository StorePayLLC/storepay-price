'use client';

import { Layout, Typography, Card, Button, List, Flex } from 'antd';
import { useRouter } from '@/components/navigation';
import {
  SafetyCertificateOutlined,
  BankOutlined,
  IdcardOutlined,
  FileTextOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import {useMerchantCreateMutation} from "@/gql/mutation/merchant/create.generated";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const requirements = [
  {
    icon: <IdcardOutlined className="text-blue-400" />,
    title: 'Business Registration',
    description: 'Valid business registration certificate or company incorporation documents'
  },
  {
    icon: <BankOutlined className="text-green-400" />,
    title: 'Email verification',
    description: 'Business bank account details for settlements and financial verification'
  },
  {
    icon: <FileTextOutlined className="text-amber-400" />,
    title: 'Phone verification',
    description: 'Tax registration certificates and relevant compliance documents'
  },
  {
    icon: <SafetyCertificateOutlined className="text-cyan-400" />,
    title: 'Identity Verification',
    description: 'Government-issued ID of company directors and authorized representatives'
  }
];

export default function RegisterClient() {
  const router = useRouter();
  const [create, {loading}] = useMerchantCreateMutation();

  return (
    <Layout className="min-h-screen">
      <Content>
        <div className="max-w-4xl mx-auto px-4 py-24">
          <Title level={1} className="text-white text-center mb-4">
            Become an SPC Merchant
          </Title>
          <Paragraph className="text-gray-400 text-center text-lg mb-16">
            Join our network of trusted merchants and start accepting crypto payments.
            Our KYB process is designed to be straightforward while maintaining the highest
            security standards.
          </Paragraph>

          <Card className="border border-gray-800 mb-12">
            <List
              dataSource={requirements}
              renderItem={(item) => (
                <List.Item className="border-b border-gray-800 last:border-0 py-6">
                  <Flex gap={16} align="start">
                    <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <Title level={4} className="text-white mb-1">
                        {item.title}
                      </Title>
                      <Text className="text-gray-400">
                        {item.description}
                      </Text>
                    </div>
                  </Flex>
                </List.Item>
              )}
            />
          </Card>

          <Card className="bg-[#1e293b] border-0 mb-12">
            <Flex gap={12} align="center">
              <SafetyCertificateOutlined className="text-2xl text-amber-400" />
              <Text className="text-white">
                Your business information is encrypted and securely stored. We comply with
                global data protection regulations to ensure your data privacy.
              </Text>
            </Flex>
          </Card>

          <div className="text-center">
            <div className="flex gap-4 flex-row justify-center">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                className="bg-blue-600"
                onClick={() => {
                  create({variables: {input: {}}}).then((res) => {
                    if (res.data?.merchantCreateByUser) {
                      router.push(`/merchant/kyb/${res.data.merchantCreateByUser.id}`)
                      window.open(res.data.merchantCreateByUser.preferences?.kyc_link, '_blank');
                    }
                  })
                }}
              >
                Start Verification
              </Button>
              <Button onClick={() => router.push('/')} size="large">Cancel</Button>
            </div>
            <Text className="text-gray-400 block mt-4">
              Estimated completion time: 10-15 minutes
            </Text>
          </div>
        </div>
      </Content>
    </Layout>
  );
}