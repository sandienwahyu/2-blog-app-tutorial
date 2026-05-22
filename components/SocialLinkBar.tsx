"use client";

import Link from "next/link";
import { siFacebook, siInstagram, siX, siYoutube } from "simple-icons";
import { BrandIcon } from "./brand-icon";

const socialLinks: { name: string; href: string; icon: any }[] = [
  { name: "Instagram", href: "https://instagram.com", icon: siInstagram },
  { name: "Facebook", href: "https://facebook.com", icon: siFacebook },
  { name: "X", href: "https://x.com", icon: siX },
  { name: "Youtube", href: "https://youtube.com", icon: siYoutube },
];

export default function SocialLinkBar() {
  return (
    <div className="flex justify-center items-center gap-5">
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-4 w-4 items-center justify-center bg-background text-foreground transition-all hover:text-muted-foreground rounded-full"
          //   style={{
          //     ["--hover-color" as any]: `#${social.icon.hex}`,
          //   }}
        >
          <span className="sr-only">{social.name}</span>
          <BrandIcon icon={social.icon} className="h-full w-full" />
        </Link>
      ))}
    </div>
  );
}
