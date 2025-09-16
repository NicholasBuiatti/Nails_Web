const socialLinks = [
    {
        href: "https://instagram.com",
        label: "Instagram",
        icon: "fa-brands fa-instagram",
    },
    {
        href: "https://tiktok.com",
        label: "TikTok",
        icon: "fa-brands fa-tiktok",
    },
    {
        href: "https://twitter.com",
        label: "Twitter",
        icon: "fa-brands fa-twitter",
    },
];

export const SocialLinks = ({ iconSize = "text-4xl", hoverColor = "hover:text-blue-500", className = "" }) => (
    <div className={className}>
        {socialLinks.map(({ href, label, icon }) => (
            <a key={label} href={href} aria-label={label}>
                <i className={`${icon} ${iconSize} ${hoverColor}`}></i>
            </a>
        ))}
    </div>
);