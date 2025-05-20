'use client';

import {useEffect, useState} from 'react';
import { Card, Steps, Typography } from 'antd';
import { IdcardOutlined, CameraOutlined, FormOutlined } from '@ant-design/icons';
import {useParams} from "next/navigation";
import {usePathname} from "@/components/navigation";

const { Title } = Typography;

export default function KYCClient({children}: {children: React.ReactNode}) {
  const [currentStep, setCurrentStep] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes('register')) {
      setCurrentStep(0);
    } else if (pathname.includes('face-recognition')) {
      setCurrentStep(1);
    } else if (pathname.includes('information')) {
      setCurrentStep(2);
    }
  }, []);

  const steps = [
    {
      title: 'Upload ID',
      icon: <IdcardOutlined />,
      content: children
    },
    {
      title: 'Face Verification',
      icon: <CameraOutlined />,
      content: children
    },
    {
      title: 'Verify Information',
      icon: <FormOutlined />,
      content: children
    }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <Title level={2} className="text-white mb-6">
        Identity Verification
      </Title>

      <Card className="bg-[#111] border border-gray-800 mb-6">
        <Steps
          current={currentStep}
          items={steps}
          className="mb-8"
        />
        {steps[currentStep].content}
      </Card>
    </div>
  );
}