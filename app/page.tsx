import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 items-center gap-10 w-full h-full max-h-none justify-center">
      <div className="flex flex-col flex-1 gap-8 items-start">
        <h1 className="py-1 text-5xl font-extrabold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-linear-to-b from-50%  from-primary to-foreground">
          Better design for your digital products
        </h1>
        <h4 className="py-1 text-lg">
          Turning your ideas into reality. We bring together the teams from the
          global tech industry
        </h4>
        <Button size={"lg"} className="cursor-pointer">
          See Our Work
        </Button>
      </div>
      <div className="hidden sm:flex flex-1 items-center justify-center">
        <Image
          src={"digital-presentation-bro.svg"}
          alt="Programming Illustration"
          width={400}
          height={400}
          className="drop-shadow-lg drop-shadow-primary animate-slide-up"
          loading="eager"
        />
      </div>
    </div>
  );
}
