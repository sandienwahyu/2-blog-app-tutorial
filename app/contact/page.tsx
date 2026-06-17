"use client";

import MessageForm from "@/components/MessageForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center gap-1 mt-4">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-lg text-muted-foreground">
          Have questions or want to get in touch? We`d love to hear from you!
        </p>
      </div>
      <div className="flex-1 flex justify-center items-stretch w-full gap-5 lg:gap-10">
        <div className="relative flex-1 overflow-hidden">
          <Image
            src="/contact-us-bro-2.svg"
            alt="Contact Image"
            fill
            className="object-contain animate-shake"
          />
        </div>
        <form className="flex-1 flex flex-col items-center justify-center gap-4">
          <MessageForm />
          <Button type="submit" className="cursor-pointer">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
