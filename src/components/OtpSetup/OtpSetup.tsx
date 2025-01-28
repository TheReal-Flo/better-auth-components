import React from "react";
import QRCode from "react-qr-code";
import "./OtpSetup.scss";
import "@fontsource/poppins";

interface OtpSetupProps {
  uri: string;
  showBackUpCodes?: boolean;
  backUpCodes?: string;
  onContinue: () => void;
}

const OtpSetup = ({
  uri,
  showBackUpCodes = false,
  backUpCodes = "",
  onContinue,
}: OtpSetupProps) => {
  return (
    <div className="container">
      <div className="card">
        <div className="header">Setup your Authenticator</div>
        <p className="subHeader">Scan this QR code with your Authenticator App:</p>
        <QRCode value={uri} />
        {showBackUpCodes && (
          <div>
            <p className="subHeader">Save these backup codes somewhere secure:</p>
            <pre className="backUpCodes">{backUpCodes}</pre>
          </div>
        )}
        <button className="button" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default OtpSetup;