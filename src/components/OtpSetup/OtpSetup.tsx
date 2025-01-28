import React, { useState } from "react";
import QRCode from "react-qr-code";
import "@fontsource/poppins";

interface OtpSetupProps {
    uri: string,
    showBackUpCodes?: boolean,
    backUpCodes?: string,
    onContinue: () => void,
}

const OtpSetup = ({uri, showBackUpCodes = false, backUpCodes = "", onContinue}: OtpSetupProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const styles: { [key: string]: React.CSSProperties } = {
        container: {
            fontFamily: "Poppins",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            backgroundColor: "#f9f9f9",
            height: "100vh",
        },
        card: {
            width: "100%",
            maxWidth: "400px",
            padding: "2rem",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
        },
        header: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
            color: "#333",
        },
        subHeader: {
            fontSize: "1rem",
            color: "#666",
            marginBottom: "1rem",
        },
        button: {
            boxSizing: "border-box",
            width: "100%",
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: isHovered ? "#aaf" : "#cce",
            color: "#222",
            fontSize: "1.1rem",
            cursor: "pointer",
            transition: "background-color 0.3s",
            marginTop: "1rem"
        },
        backUpCodes: {
            fontFamily: "monospace",
            fontSize: "1.2rem",
            backgroundColor: "#ddd",
            padding: "0.5rem",
            borderRadius: "4px",
        }
      };
    
    return (
        <div className="better-auth-otp-setup" style={styles.container}>
            <div style={styles.card}>
                <div style={styles.header}>Setup your Authenticator</div>
                <p style={styles.subHeader}>Scan this QR code with your Authenticator App:</p>
                <QRCode value={uri} />
                {showBackUpCodes && (
                    <div>
                        <p style={styles.subHeader}>Save these backup codes somewhere secure:</p>
                        <pre style={styles.backUpCodes}>{backUpCodes}</pre>
                    </div>
                )}
                <button
                    style={styles.button}
                    onClick={onContinue}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >Continue</button>
            </div>
        </div>
    )
}

export default OtpSetup;