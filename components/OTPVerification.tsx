import { useState, useEffect, useRef } from 'react';
import { Form, Button, Typography, Flex } from 'antd';
import Link from 'next/link';

const { Text } = Typography;

interface OTPVerificationProps {
  onSubmit: (code: string) => Promise<void>;
  onResend: () => Promise<void>;
  backLink: string;
  backText: string;
}

export default function OTPVerification({ 
  onSubmit, 
  onResend, 
  backLink, 
  backText 
}: OTPVerificationProps) {
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendTimer > 0 && !canResend) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0 && !canResend) {
      setCanResend(true);
    }
    return () => clearInterval(timer);
  }, [resendTimer, canResend]);

  const handleChange = (value: string, index: number) => {
    if (value.length > 1) {
      value = value[0];
    }
    
    if (!/^\d*$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move to previous input on backspace if current input is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    // Focus last input or the next empty input
    const lastFilledIndex = newOtp.findIndex(val => !val);
    const focusIndex = lastFilledIndex === -1 ? 5 : lastFilledIndex;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = async () => {
    const code = otp.join('');
    if (code.length !== 6) return;

    setLoading(true);
    try {
      await onSubmit(code);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      await onResend();
      setResendTimer(30);
      setCanResend(false);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } catch (error) {
      console.error('Failed to resend code:', error);
    }
  };

  return (
    <Form layout="vertical" requiredMark={false}>
      <Flex gap={8} justify="center" className="mb-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={el => inputRefs.current[index] = el}
            type="text"
            value={digit}
            onChange={e => handleChange(e.target.value, index)}
            onKeyDown={e => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className="w-12 h-12 text-center text-xl font-semibold rounded-lg 
                     bg-[#1a1a1a] border border-gray-700 text-white 
                     focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                     transition-colors"
            maxLength={1}
            autoComplete="off"
          />
        ))}
      </Flex>

      <Button
        type="primary"
        onClick={handleSubmit}
        className="w-full bg-blue-600 mb-4"
        loading={loading}
        disabled={otp.some(digit => !digit)}
      >
        Verify code
      </Button>

      <div className="text-center space-y-2">
        <Text className="text-gray-400 block">
          Didn&apos;t receive the code?{' '}
          {canResend ? (
            <Button 
              type="link" 
              className="p-0 text-blue-500 hover:text-blue-400"
              onClick={handleResend}
            >
              Resend
            </Button>
          ) : (
            <Text type="secondary">
              Resend in {resendTimer}s
            </Text>
          )}
        </Text>
        <Link href={backLink} className="text-blue-500 hover:text-blue-400 block">
          {backText}
        </Link>
      </div>
    </Form>
  );
}