interface TitleProps {
  title: string;
  description: string;
}

export function Title({ title, description }: TitleProps) {
  return (
    <div id={title} className="justify-center px-4 pt-32 pb-7 md:px-8 md:pb-10 lg:px-[10vw] xl:px-[15vw] 2xl:px-[20vw]">
      <div className="flex flex-col gap-5 items-start md:flex-row md:justify-between">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="225"
          className="text-primary text-2xl leading-[30px] md:text-3xl font-bold font-americana-bold"
        >
          {title}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="450"
          className="font-americana-bold text-primary text-sm md:text-base leading-[18px] w-3/4 md:text-balance md:w-1/2 lg:text-base xl:max-w-[400px] xl:w-full lg:leading-[20.8px]"
        >
          {description}
        </p>
      </div>

    </div>
  );
}
