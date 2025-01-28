import React from "react";
import "@fontsource/poppins";
import OAuthProviderButton from "../ProviderButtons/OAuthProviderButton";
import './SignUpForm.scss';

export interface SignUpFormProps {
  onSignup: (name: string, email: string, password: string) => void;
  footer?: string;
  signInRoute?: string;
  oauth?: boolean;
  oauthProviders?: ("Apple" | "Discord" | "Facebook" | "GitHub" | "GitLab" | "Google" | "LinkedIn" | "Microsoft" | "Reddit" | "Spotify" | "Twitch" | "Twitter")[];
  onOauth?: (provider: string) => void;
}

export const SignUpForm = ({ onSignup, footer = "Made with ❤️ by better-auth-components", signInRoute = "#", oauth = false, oauthProviders = [], onOauth = (provider) => {}}: SignUpFormProps) => {
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
    <div className="better-auth-signin-form container">
      <div className="card">
        <div className="header">Sign up to continue</div>
        <p className="subHeader">Create an account to get started</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Email address
            <input
              type="email"
              value={email}
              placeholder="john.doe@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              value={passwordCheck}
              placeholder="Repeat Password"
              onChange={(e) => setPasswordCheck(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
          >Sign Up</button>
        </form>
        {oauth && <>
          <div className="dividerContainer">
            <hr className="dividerLine" />
            <span className="dividerText">or</span>
            <hr className="dividerLine" />
          </div>
          {oauthProviders.map((provider) => {
            return <OAuthProviderButton provider={provider} onClick={onOauth} />
          })}
        </>}
        <div className="footerLink">Already have an account? <a href={signInRoute} className="link">Log in</a></div>
        {footer && <><hr /><div className="footer">{footer}</div></>}
      </div>
    </div>
  );
};

export default SignUpForm;