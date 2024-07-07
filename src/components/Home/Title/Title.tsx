interface TitleProps {
  title: string;
  description: string;
}

export function Title({ title, description }: TitleProps) {
  return (
    <div id={title} className="md:flex justify-between items-center py-8 md:mx-4 lg:mx-24 mt-14 sm:mt-6 mb-12 md:mb-28 p-4 md:p-8">
      <h1
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="300"
        className="text-primary text-3xl md:text-5xl font-semibold font-americana-bold"
        >
        {title}
      </h1>
      <p
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="600"
        className="text-primary text-base md:text-2xl max-w-md mt-6 md:mt-0 w-[75%] md:w-full font-americana-bold"
      >
        {description}
      </p>
    </div>
  );
}
