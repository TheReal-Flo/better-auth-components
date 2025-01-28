import React from "react";
import "@fontsource/poppins";
import OAuthProviderButton from "../ProviderButtons/OAuthProviderButton";
import "./SignInForm.scss";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignin(email, password);
  };

  return (
    <div className="better-auth-signin-form container">
      <div className="card">
        <div className="header">Sign in to continue</div>
        <p className="subHeader">Welcome back! Please sign in to continue</p>
        <form onSubmit={handleSubmit}>
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
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
          >Sign In</button>
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
        <div className="footerLink">Don’t have an account? <a href={signUpRoute} className="link">Sign up</a></div>
        {footer && <><hr /><div className="footer">{footer}</div></>}
      </div>
    </div>
  );
};

export default SignInForm;
