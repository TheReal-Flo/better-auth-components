import React from "react";
import "@fontsource/poppins";

export interface SignUpFormProps {
  onSignup: (name: string, email: string, password: string) => void;
  footer?: string;
}

export const SignUpForm = ({ onSignup, footer = "Made with ❤️ by better-auth-components" }: SignUpFormProps) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      alert("Passwords do not match!");
      return;
    }
    onSignup(name, email, password);
  };

  return (
    <div className="better-auth-signin-form" style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>Sign up to continue</div>
        <p style={styles.subHeader}>Create an account to get started</p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Name
            <input
              type="text"
              value={name}
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
          </label>
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
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </label>
          <label style={styles.label}>
            Confirm Password
            <input
              type="password"
              value={passwordCheck}
              placeholder="Repeat Password"
              onChange={(e) => setPasswordCheck(e.target.value)}
              style={styles.input}
              required
            />
          </label>
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <div style={styles.footerLink}>Already have an account? <a href="#" style={styles.link}>Log in</a></div>
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
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
    outline: "none",
  },
  button: {
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

export default SignUpForm;