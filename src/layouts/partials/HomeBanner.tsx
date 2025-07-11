import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const HomeBanner = () => {
  const { title, description, buttons, images } = getListPage(
    "sections/home-banner.md",
  ).frontmatter;

  return (
    <section className="pb-0 pt-16">
      <div className="container">
        <div className="row justify-center">
          <div className="mb-8 text-center md:col-9 lg:col-11">
            {title && (
              <h1
                dangerouslySetInnerHTML={markdownify(title)}
                data-aos="fade-up-sm"
                className="mb-4 text-h3 lg:text-h1"
              />
            )}
            {description && (
              <p
                dangerouslySetInnerHTML={markdownify(description)}
                data-aos="fade-up-sm"
                className="mb-8 text-lg/[inherit]"
              />
            )}
            {buttons && (
              <ul className="flex flex-wrap justify-center gap-4">
                {buttons.map(
                  (
                    { label, link }: { label: string; link: string },
                    index: number,
                  ) => (
                    <li
                      key={index}
                      data-aos="fade-up-sm"
                      data-aos-delay={100 + index * 50}
                    >
                      <a
                        className={`${index === 0 ? "btn-primary" : "btn-outline-primary"} btn `}
                        href={link}
                        target={link.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener"
                      >
                        {label}
                        <span className="sr-only">Details</span>
                        <span className="icon-wrapper">
                          <span className="icon">
                            <DynamicIcon icon={"FaArrowRight"} />
                          </span>
                          <span className="icon" aria-hidden="true">
                            <DynamicIcon icon={"FaArrowRight"} />
                          </span>
                        </span>
                      </a>
                    </li>
                  ),
                )}
              </ul>
            )}
          </div>
          {images && (
            <>
              <div
                className="col-12 lg:pt-2 order-2"
                data-aos="fade-up-sm"
                data-aos-delay="400"
              >
                <div className="max-h-[540px] w-full overflow-hidden rounded-xl">
                  {images[0] && (
                    <ImageFallback
                      src={images[0].src}
                      alt={images[0].alt}
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* <div className="col-12 pb-4 pt-16 lg:pb-0 order-1">
                <div className="flex flex-wrap justify-center gap-4 px-4 lg:flex-nowrap lg:justify-between lg:px-0">
                  {images
                    .slice(1, 4)
                    .map(
                      (
                        { src, alt }: { src: string; alt: string },
                        index: number,
                      ) => (
                        <div
                          key={index}
                          className={`${index === 0 ? "lg:mt-8 [&.aos-animate]:lg:!rotate-[-9.4deg]" : index === 1 ? "[&.aos-animate]:lg:!rotate-[2.57deg]" : "[&.aos-animate]:lg:!rotate-[-8.52deg]"}`}
                          data-aos="fade-in"
                          data-aos-duration="400"
                          data-aos-delay={150 + index * 150 + 50}
                        >
                          <ImageFallback
                            src={src}
                            alt={alt}
                            className={`${index === 0 ? "min-[350px]:h-[80px] lg:h-[72px] custom-shadow" : index === 1 ? "custom-shadow-sm min-[350px]:h-[80px] lg:h-[98px]" : "custom-shadow min-[350px]:h-[80px] lg:h-[84px]"} rounded-md md:rounded-xl w-auto`}
                            width={1920}
                            height={1080}
                          />
                        </div>
                      ),
                    )}
                </div>
              </div> */}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
