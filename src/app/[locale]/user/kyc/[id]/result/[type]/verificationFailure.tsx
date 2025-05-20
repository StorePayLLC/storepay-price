'use client';

import { useState } from 'react';
import { Button, Typography, Flex, List } from 'antd';
import { CloseCircleFilled, WarningFilled } from '@ant-design/icons';
import {useRouter} from "@/components/navigation";
import {useParams} from "next/navigation";

const { Title, Text } = Typography;

interface VerificationFailureProps {
  errorType?: 'face_not_found' | 'multiple_faces' | 'no_match' | 'poor_quality' | 'general';
}

export default function VerificationFailure({
                                              errorType = 'general'
                                            }: VerificationFailureProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();

  const getErrorMessage = () => {
    switch (errorType) {
      case 'face_not_found':
        return "We couldn't detect a face in the image. Please ensure your face is clearly visible.";
      case 'multiple_faces':
        return "Multiple faces were detected. Please ensure only your face is in the frame.";
      case 'no_match':
        return "Your face doesn't match with the ID provided. Please try again with the correct ID.";
      case 'poor_quality':
        return "The image quality is too low. Please ensure good lighting and a clear view of your face.";
      default:
        return "We encountered an issue with your face verification. Please try again.";
    }
  };

  const getTips = () => {
    const commonTips = [
      "Ensure you're in a well-lit area",
      "Position your face clearly in the frame",
      "Remove glasses, hats, or other accessories",
      "Look directly at the camera"
    ];

    switch (errorType) {
      case 'poor_quality':
        return [
          ...commonTips,
          "Avoid backlighting or shadows on your face",
          "Clean your camera lens if it appears blurry"
        ];
      case 'multiple_faces':
        return [
          "Ensure you're alone in the frame",
          "Move away from mirrors or photos with faces",
          "Find a private space to complete verification"
        ];
      default:
        return commonTips;
    }
  };

  return (
    <Flex vertical align="center" className="py-12">
      <CloseCircleFilled className="text-6xl text-red-500 mb-6" />

      <Title level={3} className="text-white text-center mb-2">
        Verification Failed
      </Title>

      <Text className="text-gray-400 text-center block mb-6 max-w-md">
        {getErrorMessage()}
      </Text>

      <div className="bg-[#1e293b] p-4 rounded-lg mb-6 w-full max-w-md">
        <Flex align="center" gap={2} className="mb-2">
          <WarningFilled className="text-amber-400" />
          <Text strong className="text-white">Tips for successful verification:</Text>
        </Flex>
        <List
          size="small"
          dataSource={getTips()}
          renderItem={(item) => (
            <List.Item className="border-0 text-gray-400 py-1">
              • {item}
            </List.Item>
          )}
        />
      </div>

      <Flex gap={4}>
        <Button
          type="primary"
          size="large"
          onClick={() => router.push(`/user/kyc/${params.id}/face-recognition`)}
          loading={loading}
          className="bg-blue-600"
        >
          Try Again
        </Button>
      </Flex>
    </Flex>
  );
}