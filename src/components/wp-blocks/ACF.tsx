export const HeroBlock = ({
  title,
  subtitle,
  backgroundImage,
}: {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}) => (
  <section
    className="relative w-full h-96 flex flex-col justify-center items-center text-white bg-gray-800"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
    }}
  >
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="mt-2 text-lg">{subtitle}</p>
  </section>
);
