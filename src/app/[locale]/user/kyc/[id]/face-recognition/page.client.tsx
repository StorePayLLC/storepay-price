'use client';

import {useState, useEffect} from 'react';
import {Skeleton} from 'antd';
import {FaceLivenessDetector} from "@aws-amplify/ui-react-liveness";
import {useGenerateSessionIdMutation} from "@/gql/mutation/user/kyc/generateSessionId.generated";
import awsmobile from './aws-exports'
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import {useRouter} from "@/components/navigation";
import {useParams} from "next/navigation";
import {useFaceCheckMutation} from "@/gql/mutation/user/kyc/faceCheck.generated";

Amplify.configure(awsmobile);
export default function FaceVerification() {
  const [generate, {loading}] = useGenerateSessionIdMutation();
  const [sessionId, setSessionId] = useState<string | undefined>(undefined);
  const router = useRouter();
  const [check, {data: checkData, loading: checking}] = useFaceCheckMutation();
  const params = useParams();

  useEffect(() => {
    if (!sessionId) {
      generate().then((res) => {
        setSessionId(res.data?.kycGenerateSessionId)
      })
    }
  }, [sessionId]);

  if (loading) {
    return <Skeleton />
  }

  if (!sessionId) {
    return <></>;
  }

  const onSuccess = () => {
    check({variables: {input: {id: params.id as string, sessionId: sessionId}}}).then(() => {
      router.push(`/user/kyc/${params.id}/result/success`)
    }).catch(() => {
      router.push(`/user/kyc/${params.id}/result/failure`)
    })
  }

  return (
    <div>
      <div className="relative overflow-hidden">
        <FaceLivenessDetector
          onUserCancel={() => console.log('called')}
          sessionId={sessionId}
          region="us-east-1"
          onError={(err) => router.push('/user/kyc/1/result/failure')}
          disableStartScreen={true}
          onAnalysisComplete={async () => onSuccess()}
        />
        <div className="absolute inset-0 border-2 border-blue-500 rounded-lg" />
      </div>
    </div>
  );
}