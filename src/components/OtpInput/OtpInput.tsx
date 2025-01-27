import React, { useEffect, useRef, useState } from 'react';
import "@fontsource/poppins";

const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DELETE = 46;

interface OtpInputProps {
  numInputs?: number;
  seperator?: string,
  onSubmit: (otp: string) => void;
  isInputNum?: boolean;
  isInputSecure?: boolean;
  shouldAutoFocus?: boolean;
  error?: boolean;
  autoSubmit?: boolean;
  'data-testid'?: string;
  'data-cy'?: string;
}

const styles = {
  container: {
    fontFamily: "Poppins",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    height: "100vh",
  },
  card: {
    padding: '2rem',
    maxWidth: '100vw',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as const,
  },
  header: {
    fontSize: '1.5rem',
    fontWeight: 'bold' as const,
    marginBottom: '0.5rem',
    color: '#333',
  },
  subHeader: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '1.5rem',
  },
  inputContainer: {
    display: 'flex',
    gap: '0.75rem',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  input: {
    width: '1.5rem',
    height: '2.5rem',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1.5rem',
    textAlign: 'center' as const,
    outline: 'none',
    transition: 'all 0.3s ease',
    color: '#333',
    backgroundColor: '#fff',
  },
  focus: {
    borderColor: '#007BFF',
    boxShadow: '0 0 0 3px rgba(0,123,255,0.2)',
    transform: 'scale(1.05)',
  },
  error: {
    borderColor: '#dc3545',
    boxShadow: '0 0 0 3px rgba(220,53,69,0.2)',
  },
  button: {
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    alignSelf: 'center',
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },
  footer: {
    fontSize: '0.875rem',
    color: '#666',
    marginTop: '1rem',
  },
  seperator: {
    fontSize: '1.5rem',
    color: '#333',
    height: '2.5rem',
    width: '0.2rem',
    padding: '0.5rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as const,
  },
};

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

  const getType = () => isInputSecure ? 'password' : isInputNum ? 'tel' : 'text';

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
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>Verification Code</div>
        <p style={styles.subHeader}>Enter the {numInputs}-digit code from your Authenticator</p>
        
        <div style={styles.inputContainer}>
          {Array(numInputs).fill(null).map((_, index) => (
            <>
              <input
                key={index}
                ref={(el) => { if (el) inputs.current[index] = el; }}
                type={getType()}
                value={otp[index]}
                onChange={handleChange(index)}
                onKeyDown={handleKeyDown(index)}
                onPaste={handlePaste}
                onFocus={() => setActiveInput(index)}
                style={{
                  ...styles.input,
                  ...(activeInput === index && styles.focus),
                  ...(error && styles.error),
                  ...(!otp[index] && { backgroundColor: '#f8f9fa' }),
                }}
                maxLength={1}
                autoFocus={shouldAutoFocus && index === 0}
                data-testid={dataTestId && `${dataTestId}-${index}`}
                data-cy={dataCy && `${dataCy}-${index}`}
                inputMode={isInputNum ? 'numeric' : 'text'}
                aria-label={`Verification code digit ${index + 1}`}
              />
              {seperator != "" && index < numInputs - 1 && <span style={styles.seperator}>{seperator}</span>}
            </>
          ))}
        </div>

        {!autoSubmit && (
          <button
            style={styles.button}
            onClick={() => onSubmit(otp.join(''))}
            disabled={otp.some(digit => digit === '')}
          >
            Verify Code
          </button>
        )}
      </div>
    </div>
  );
};

export default OtpInput;