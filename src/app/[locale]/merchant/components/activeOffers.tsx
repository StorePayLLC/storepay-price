import {useMerchant} from "@/utils/providers";
import {Card, Flex, Skeleton, Typography} from "antd";
import React from "react";
import {useOffersQuery} from "@/gql/query/offer/offers.generated";

const { Title, Text } = Typography;

export default function MerchantOffers() {
  const {merchant} = useMerchant();
  const {data, loading} = useOffersQuery({variables: {filter: {merchantId: {eq: merchant!.id}}}})

  if (loading) return <Skeleton />;
  if (data?.offers.nodes.length === 0) return <>No offers</>

  return (
    <>
      <Title level={4} className="text-white mt-8 mb-4">
        Offers
      </Title>

      <div className="space-y-4 mb-8">
        {data?.offers.nodes.map((bid) => (
          <Card key={bid.id} className="bg-[#111] border border-gray-800">
            <Flex justify="space-between" align="center">
              <div>
                <Title level={5} className="text-white m-0">
                  {bid.number}
                </Title>
                <Text type="secondary">{bid.status}</Text>
              </div>
              <Flex vertical align="end">
                <Text className="text-emerald-400 font-semibold text-lg">
                  {bid.amount} SPC
                </Text>
                <Text type="secondary">Expires in {bid.expiredAt}</Text>
              </Flex>
            </Flex>
          </Card>
        ))}
      </div>
    </>
  );
}