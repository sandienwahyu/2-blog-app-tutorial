import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const galleries = [
    {
      name: "Illustration",
      url: "/illustration-portfolio.jpg",
    },
    {
      name: "Website",
      url: "/website-portfolio.jpg",
    },
    {
      name: "App",
      url: "/app-portfolio.jpg",
    },
  ];

  return (
    <>
      <h4 className="text-lg font-medium text-foreground/70 ml-1">
        Choose a Gallery!
      </h4>
      <div className="flex gap-5 overflow-x-auto px-2">
        {galleries.map((gallery) => (
          <Link
            href={`/portfolio/${gallery.name.toLowerCase()}`}
            key={gallery.name}
            passHref
          >
            <div className="group relative h-60 min-w-40 w-1/4 overflow-hidden border-4 border-border rounded grayscale hover:grayscale-0 cursor-pointer group-hover:scale-105 transition-all duration-500">
              <Image
                src={gallery.url}
                fill
                alt={gallery.name}
                className="object-cover transition-all duration-300 rounded group-hover:scale-105"
              />
              <p className="text-xl font-semibold text-right text-foreground/70 absolute bottom-2 w-3/4 p-2 right-0 bg-border bg-opacity-50 py-2 rounded-l-xl">
                {gallery.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
