import SocialLinkBar from "./SocialLinkBar";

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center justify-between w-full pt-1">
      <div>
        <p className="text-sm sm:text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} BlogTutor. All rights reserved.
        </p>
      </div>
      <div>
        <SocialLinkBar></SocialLinkBar>
      </div>
    </div>
  );
}
