'use client';

import {Button, Card, Descriptions, Flex, Skeleton, Typography} from 'antd';
import {ClockCircleFilled} from '@ant-design/icons';
import Link from '@/components/link';
import {useParams} from "next/navigation";
import {useMeQuery} from "@/gql/query/me.generated";
import dayjs from "dayjs";
import {State} from "@/gql/graphql";
import {useRouter} from "@/components/navigation";

const { Title, Text } = Typography;

export default function RegistrationPendingClient() {
  const params = useParams();
  const {data, loading, refetch} = useMeQuery({variables: {merchantFilter: {id: {eq: params.id as string}}}})
  const merchant = data?.me?.merchants.nodes[0];
  const router = useRouter();

  if (loading) return <Skeleton />;

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="bg-[#111] border border-gray-800">
        <Flex vertical align="center" className="mb-8">
          <ClockCircleFilled className="text-6xl text-blue-500 mb-4" />
          <Title level={2} className="text-white text-center m-0">
            Registration In Progress
          </Title>
          <Text className="text-gray-400 text-center">
            Your merchant registration is currently being reviewed
          </Text>
        </Flex>

        <Descriptions
          layout="vertical"
          column={{ xs: 1, sm: 2 }}
          bordered
          className="mb-8"
          contentStyle={{
            color: 'white'
          }}
          labelStyle={{
            color: '#9ca3af'
          }}
        >
          <Descriptions.Item label="Registration Number" span={2}>
            {merchant?.number}
          </Descriptions.Item>

          <Descriptions.Item label="Business Name">
            {merchant?.name}
          </Descriptions.Item>

          <Descriptions.Item label="Status">
            {merchant?.status}
          </Descriptions.Item>

          <Descriptions.Item label="Submitted On">
            {dayjs(merchant?.createdAt).format('YYYY-MM-DD')}
          </Descriptions.Item>

          <Descriptions.Item label="Estimated Completion">
            {dayjs(merchant?.createdAt).format('YYYY-MM-DD')}
          </Descriptions.Item>

          <Descriptions.Item label="Email Address">
            {merchant?.email}
          </Descriptions.Item>

          <Descriptions.Item label="Phone Number">
            {merchant?.phone}
          </Descriptions.Item>

          <Descriptions.Item label="Business Address" span={2}>
            {merchant?.address}
          </Descriptions.Item>

          <Descriptions.Item label="State">
            {merchant?.state}
          </Descriptions.Item>

          <Descriptions.Item label="Currency">
            {merchant?.currency}
          </Descriptions.Item>
        </Descriptions>

        <Card className="bg-[#1e293b] border-0 mb-8">
          <Flex gap={12}>
            <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center">
              <ClockCircleFilled className="text-2xl text-amber-400" />
            </div>
            <div>
              <Text className="text-white block mb-1">
                Verification in Progress
              </Text>
              <Text className="text-gray-400">
                We're currently reviewing your application and verifying your business details.
                This process typically takes 1-2 business days. We'll notify you via email
                once each verification step is completed.
              </Text>
            </div>
          </Flex>
        </Card>

        <Flex justify="center" gap={12}>
          {merchant?.state === State.Verified ? (
            <Button type="primary" size="large" loading={loading} className="bg-blue-600" onClick={() => router.push('/merchant')}>
              Visit dashboard
            </Button>
            ) : (
            <Button type="primary" size="large" loading={loading} className="bg-blue-600" onClick={() => refetch()}>
              Refresh Application Status
            </Button>
          )}
          <Link href="/merchant/support">
            <Button size="large" className="border-gray-700 text-white">
              Contact Support
            </Button>
          </Link>
        </Flex>
      </Card>
    </div>
  );
}