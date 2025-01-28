import React, { useState } from "react";
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
    provider: "Apple" | "Discord" | "Facebook" | "GitHub" | "GitLab" | "Google" | "LinkedIn" | "Microsoft" | "Reddit" | "Spotify" | "Twitch" | "Twitter";
    onClick?: (provider: string) => void;
}

const ProviderLogos = {
    "Apple": <AppleLogo height={"1.5rem"} width={"1.5rem"} />,
    "Discord": <DiscordLogo height={"1.5rem"} width={"1.5rem"} />,
    "Facebook": <FacebookLogo height={"1.5rem"} width={"1.5rem"} />,
    "GitHub": <GithubLogo height={"1.5rem"} width={"1.5rem"} />,
    "GitLab": <GitlabLogo height={"1.5rem"} width={"1.5rem"} />,
    "Google": <GoogleLogo height={"1.5rem"} width={"1.5rem"} />,
    "LinkedIn": <LinkedinLogo height={"1.5rem"} width={"1.5rem"} />,
    "Microsoft": <MicrosoftLogo height={"1.5rem"} width={"1.5rem"} />,
    "Reddit": <RedditLogo height={"1.5rem"} width={"1.5rem"} />,
    "Spotify": <SpotifyLogo height={"1.5rem"} width={"1.5rem"} />,
    "Twitch": <TwitchLogo height={"1.5rem"} width={"1.5rem"} />,
    "Twitter": <TwitterXLogo height={"1.5rem"} width={"1.5rem"} />
}

const OAuthProviderButton = ({provider, onClick = (provider) => {}}: OAuthProviderButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const clickHandler = () => {
        onClick(provider);
    }

    const styles: { [key: string]: React.CSSProperties } = {
        button: {
            boxSizing: "border-box",
            width: "100%",
            height: "3rem",
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: isHovered ? '#bbb' : 'white',
            fontSize: "1rem",
            marginBottom: "0.2rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: 'background-color 0.3s ease',
        },
        buttonText: {
            marginLeft: "0.5rem",
            fontSize: "1.1rem",
            fontWeight: "bold",
            textAlign: "center",
            flexGrow: 1,
        }
    }

    return (
        <>
            <button 
                className="better-auth-oauth-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={clickHandler}
                style={styles.button}
            >
                {ProviderLogos[provider]}
                <span style={styles.buttonText}>Sign in with {provider}</span>
            </button>
        </>
    )
}

export default OAuthProviderButton;