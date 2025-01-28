import React from "react";
import "./OAuthProviderButton.scss";
import "@fontsource/poppins";

import AppleLogo from "../ProviderLogos/AppleLogo";
import DiscordLogo from "../ProviderLogos/DiscordLogo";
import FacebookLogo from "../ProviderLogos/FacebookLogo";
import GithubLogo from "../ProviderLogos/GithubLogo";
import GitlabLogo from "../ProviderLogos/GitlabLogo";
import GoogleLogo from "../ProviderLogos/GoogleLogo";
import LinkedinLogo from "../ProviderLogos/LinkedinLogo";
import MicrosoftLogo from "../ProviderLogos/MicrosoftLogo";
import RedditLogo from "../ProviderLogos/RedditLogo";
import SpotifyLogo from "../ProviderLogos/SpotifyLogo";
import TwitchLogo from "../ProviderLogos/TwitchLogo";
import TwitterXLogo from "../ProviderLogos/TwitterXLogo";

interface OAuthProviderButtonProps {
  provider:
    | "Apple"
    | "Discord"
    | "Facebook"
    | "GitHub"
    | "GitLab"
    | "Google"
    | "LinkedIn"
    | "Microsoft"
    | "Reddit"
    | "Spotify"
    | "Twitch"
    | "Twitter";
  onClick?: (provider: string) => void;
}

const ProviderLogos = {
  Apple: <AppleLogo height="1.5rem" width="1.5rem" />,
  Discord: <DiscordLogo height="1.5rem" width="1.5rem" />,
  Facebook: <FacebookLogo height="1.5rem" width="1.5rem" />,
  GitHub: <GithubLogo height="1.5rem" width="1.5rem" />,
  GitLab: <GitlabLogo height="1.5rem" width="1.5rem" />,
  Google: <GoogleLogo height="1.5rem" width="1.5rem" />,
  LinkedIn: <LinkedinLogo height="1.5rem" width="1.5rem" />,
  Microsoft: <MicrosoftLogo height="1.5rem" width="1.5rem" />,
  Reddit: <RedditLogo height="1.5rem" width="1.5rem" />,
  Spotify: <SpotifyLogo height="1.5rem" width="1.5rem" />,
  Twitch: <TwitchLogo height="1.5rem" width="1.5rem" />,
  Twitter: <TwitterXLogo height="1.5rem" width="1.5rem" />,
};

const OAuthProviderButton = ({
  provider,
  onClick = (provider) => {},
}: OAuthProviderButtonProps) => {
  const clickHandler = () => {
    onClick(provider);
  };

  return (
    <button className="better-auth-oauth-button" onClick={clickHandler}>
      {ProviderLogos[provider]}
      <span className="button-text">Sign in with {provider}</span>
    </button>
  );
};

export default OAuthProviderButton;