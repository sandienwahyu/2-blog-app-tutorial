import { getData } from "@/lib/api";
import Image from "next/image";

export default async function IllustrationPage() {
  const res = await getData();

  return (
    <>
      <h4 className="text-3xl font-semibold text-primary/70 ml-1 mb-4">
        Illustration
      </h4>
      <div className="flex flex-col gap-6">
        {res.map((item: any) => (
          <div
            key={item.id}
            className={`flex ${item.id % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-5 min-h-52 justify-center`}
          >
            <div className="w-1/2 flex flex-col gap-2 justify-center">
              <h6 className="text-lg font-semibold">{item.title}</h6>
              <p className="text-sm text-justify text-foreground/80">
                {item.description}
              </p>
            </div>
            <div className="w-1/2 overflow-hidden relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
