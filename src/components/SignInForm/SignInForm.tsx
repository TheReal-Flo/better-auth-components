import React from "react";
import "@fontsource/poppins";
import OAuthProviderButton from "../ProviderButtons/OAuthProviderButton";

export interface SignInFormProps {
  onSignin: (email: string, password: string) => void;
  footer?: string;
  signUpRoute?: string;
  oauth?: boolean;
  oauthProviders?: ("Apple" | "Discord" | "Facebook" | "GitHub" | "GitLab" | "Google" | "LinkedIn" | "Microsoft" | "Reddit" | "Spotify" | "Twitch" | "Twitter")[];
  onOauth?: (provider: string) => void;
}

export const SignInForm = ({ onSignin, footer = "Made with ❤️ by better-auth-components", signUpRoute = "#", oauth = false, oauthProviders = [], onOauth = (provider) => {}}: SignInFormProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isHovered, setIsHovered] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignin(email, password);
  };

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
    form: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      marginBottom: "1rem",
      fontSize: ".9rem",
      color: "#333",
      textAlign: "left",
    },
    input: {
      boxSizing: "border-box",
      width: "100%",
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "1rem",
      outline: "none",
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
    },
    footerLink: {
      marginTop: "1rem",
      fontSize: "0.875rem",
      color: "#333",
    },
    link: {
      color: "#007BFF",
      textDecoration: "none",
    },
    footer: {
      marginTop: "1rem",
      fontSize: "0.875rem",
      color: "#666",
    },
    dividerContainer: {
      display: "flex",
      alignItems: "center",
      margin: "1rem 0",
      position: "relative",
    },
    dividerLine: {
      flexGrow: 1,
      color: "#555",
    },
    dividerText: {
      color: "#777",
      margin: "0 .6rem",
    }
  };

  return (
    <div className="better-auth-signin-form" style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>Sign in to continue</div>
        <p style={styles.subHeader}>Welcome back! Please sign in to continue</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Email address
            <input
              type="email"
              value={email}
              placeholder="john.doe@example.com"
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </label>
          <label style={styles.label}>
            Password
            <input
              type="password"
              value={password}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </label>
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >Sign In</button>
        </form>
        {oauth && <>
          <div style={styles.dividerContainer}>
            <hr style={styles.dividerLine} />
            <span style={styles.dividerText}>or</span>
            <hr style={styles.dividerLine} />
          </div>
          {oauthProviders.map((provider) => {
            return <OAuthProviderButton provider={provider} onClick={onOauth} />
          })}
        </>}
        <div style={styles.footerLink}>Don’t have an account? <a href={signUpRoute} style={styles.link}>Sign up</a></div>
        {footer && <><hr /><div style={styles.footer}>{footer}</div></>}
      </div>
    </div>
  );
};

export default SignInForm;
