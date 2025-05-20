'use client';

import {useParams} from "next/navigation";
import VerificationSuccess from "@/app/[locale]/user/kyc/[id]/result/[type]/verificationSuccess";
import VerificationFailure from "@/app/[locale]/user/kyc/[id]/result/[type]/verificationFailure";

export default function KycResultClient() {
  const params = useParams();

  return params.type === 'success' ? (<VerificationSuccess />) : (<VerificationFailure />);
}