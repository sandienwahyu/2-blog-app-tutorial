import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-1 flex-col gap-3 w-full h-full items-center justify-start">
      <div className="relative overflow-hidden w-full h-64 md:h-80">
        <Image
          src="/people-working-while-respecting-social-distancing-restriction.jpg"
          alt="About Image"
          fill
          className="object-cover object-[center_40%] rounded-xs grayscale"
        />
        <div className="absolute left-2 bottom-2 flex flex-col justify-center bg-primary/80 px-2">
          <h1 className="text-3xl font-bold text-white">
            Digital Storytellers
          </h1>
          <p className="text-lg text-white">
            Handcrafting award winning digital experiences
          </p>
        </div>
      </div>
      <div className="flex w-full h-full gap-10 lg:gap-20 text-justify">
        <div className="flex flex-1 flex-col gap-4 w-full h-full pt-4">
          <h3 className="text-2xl font-bold mb-2">Who Are We?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            minus suscipit accusamus natus, nobis atque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus est tempora ratione et a, ipsum perferendis architecto,
            nostrum quo qui mollitia nihil omnis eveniet dolorem quidem
            distinctio quia ea nesciunt voluptate error quisquam provident
            quaerat! Voluptatum ex praesentium ullam officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            minus suscipit accusamus natus, nobis atque.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-4 md:justify-between pt-4">
          <div className="flex md:flex-1 flex-col gap-4 ">
            <h3 className="text-2xl font-bold mb-2">What We Do?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              minus suscipit accusamus natus, nobis atque.
            </p>
            <p>- Creative Illustrations</p>
            <p>- Dynamic Websites</p>
            <p>- Fast and Handy Mobile Apps</p>
          </div>
          <div className="mt-4">
            <Button className="cursor-pointer">Contact</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
