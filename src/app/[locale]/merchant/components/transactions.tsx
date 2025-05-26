import {Avatar, Flex, List, Typography} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined, WalletOutlined} from "@ant-design/icons";
import React from "react";
import {useTransactionsQuery} from "@/gql/query/wallet/transactions.generated";
import {WalletTransactionTypeCode} from "@/gql/graphql";

const { Text } = Typography;

type Props = {
  id: string
}

export default function Transactions({id}: Props) {
  const {data, loading} = useTransactionsQuery({
    variables: {
      filter: {
        walletId: {eq: id}
      },
      first: 10
    }
  })

  return (
    <List
      className="mb-6"
      dataSource={data?.walletTransactions.nodes}
      renderItem={(item) => (
        <List.Item className="px-4 py-3 bg-[#111] border border-gray-800 rounded-lg mb-3">
          <Flex align="center" className="w-full px-5" justify="space-between">
            <Flex align="center" gap={12}>
              {item.typeCode === WalletTransactionTypeCode.Credit && (
                <Avatar className="bg-red-500 flex items-center justify-center">
                  <ArrowUpOutlined />
                </Avatar>
              )}
              {item.typeCode === WalletTransactionTypeCode.Debit && (
                <Avatar className="bg-green-500 flex items-center justify-center">
                  <ArrowDownOutlined />
                </Avatar>
              )}

              <div>
                <Text className="text-white font-medium block">
                  {item.typeCode}
                </Text>
                <Text type="secondary" className="text-xs">
                  {item.transactionAt}
                </Text>
              </div>
            </Flex>

            <Flex vertical align="end">
              <Text
                className={`font-semibold ${
                  item.typeCode === WalletTransactionTypeCode.Debit
                    ? 'text-green-400'
                    : 'text-amber-400'
                }`}
              >
                {item.typeCode === WalletTransactionTypeCode.Debit ? '+' : ''}{item.amount} SPC
              </Text>
              <Text type="secondary" className="text-xs">
                {item.dueDate}
              </Text>
            </Flex>
          </Flex>
        </List.Item>
      )}
    />
  )
}