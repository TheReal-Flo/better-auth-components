import React from "react";
import "@fontsource/poppins";

export interface SignInFormProps {
  onSignin: (email: string, password: string) => void;
  footer?: string;
}

export const SignInForm = ({ onSignin, footer = "Made with ❤️ by better-auth-components" }: SignInFormProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignin(email, password);
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
          <button type="submit" style={styles.button}>Continue</button>
        </form>
        <div style={styles.footerLink}>Don’t have an account? <a href="#" style={styles.link}>Sign up</a></div>
        {footer && <><hr /><div style={styles.footer}>{footer}</div></>}
      </div>
    </div>
  );
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
  divider: {
    margin: "1rem 0",
    fontSize: "0.875rem",
    color: "#aaa",
    position: "relative",
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
  // Add this globally or to each element
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
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "1rem",
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
};

export default SignInForm;
