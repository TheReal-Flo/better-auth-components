import React, { useEffect, useRef, useState } from 'react';
import './OtpInput.scss';
import "@fontsource/poppins";

const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DELETE = 46;

interface OtpInputProps {
  numInputs?: number;
  seperator?: string;
  onSubmit: (otp: string) => void;
  isInputNum?: boolean;
  isInputSecure?: boolean;
  shouldAutoFocus?: boolean;
  error?: boolean;
  autoSubmit?: boolean;
  'data-testid'?: string;
  'data-cy'?: string;
}

const OtpInput = ({
  numInputs = 6,
  seperator = '-',
  onSubmit,
  isInputNum = true,
  isInputSecure = false,
  shouldAutoFocus = false,
  error = false,
  autoSubmit = true,
  'data-testid': dataTestId,
  'data-cy': dataCy,
}: OtpInputProps) => {
  const [otp, setOtp] = useState<string[]>(Array(numInputs).fill(''));
  const [activeInput, setActiveInput] = useState(0);
  const inputs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (autoSubmit && otp.every(digit => digit !== '') && otp.length === numInputs) {
      onSubmit(otp.join(''));
    }
  }, [otp, autoSubmit, numInputs, onSubmit]);

  const getType = () => (isInputSecure ? 'password' : isInputNum ? 'tel' : 'text');

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.slice(-1);

    if (isInputNum && !/^\d+$/.test(newValue)) return;

    const newOtp = [...otp];
    newOtp[index] = newValue;
    setOtp(newOtp);

    if (newValue && index < numInputs - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ([BACKSPACE, LEFT_ARROW].includes(e.keyCode) && index > 0 && !otp[index]) {
      inputs.current[index - 1]?.focus();
    }
    if ([RIGHT_ARROW].includes(e.keyCode) && index < numInputs - 1 && !otp[index]) {
      inputs.current[index + 1]?.focus();
    }
    if ([BACKSPACE, DELETE].includes(e.keyCode) && otp[index]) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, numInputs);

    if (isInputNum && !/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split('').slice(0, numInputs);
    setOtp(newOtp);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">Verification Code</div>
        <p className="subHeader">
          Enter the {numInputs}-digit code from your Authenticator
        </p>

        <div className="inputContainer">
          {Array(numInputs)
            .fill(null)
            .map((_, index) => (
              <>
                <input
                  key={index}
                  ref={(el) => {
                    if (el) inputs.current[index] = el;
                  }}
                  type={getType()}
                  value={otp[index]}
                  onChange={handleChange(index)}
                  onKeyDown={handleKeyDown(index)}
                  onPaste={handlePaste}
                  onFocus={() => setActiveInput(index)}
                  className={`input ${activeInput === index ? 'focus' : ''} ${
                    error ? 'error' : ''
                  }`}
                  maxLength={1}
                  autoFocus={shouldAutoFocus && index === 0}
                  data-testid={dataTestId && `${dataTestId}-${index}`}
                  data-cy={dataCy && `${dataCy}-${index}`}
                  inputMode={isInputNum ? 'numeric' : 'text'}
                  aria-label={`Verification code digit ${index + 1}`}
                />
                {seperator !== '' && index < numInputs - 1 && (
                  <span className="seperator">{seperator}</span>
                )}
              </>
            ))}
        </div>

        {!autoSubmit && (
          <button
            className="button"
            onClick={() => onSubmit(otp.join(''))}
            disabled={otp.some((digit) => digit === '')}
          >
            Verify Code
          </button>
        )}
      </div>
    </div>
  );
};

export default OtpInput;