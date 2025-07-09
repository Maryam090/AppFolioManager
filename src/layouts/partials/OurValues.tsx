import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { FeatureSection } from "@/types";

const OurValues = () => {
  const { title, subtitle, description, list } = getListPage(
    "sections/our-values.md",
  ).frontmatter;
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-10" data-aos="fade-up-sm">
            {subtitle && (
              <p
                className="mb-2 text-tertiary font-medium"
                dangerouslySetInnerHTML={markdownify(subtitle)}
              />
            )}
            {title && (
              <h2
                className="mb-6"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="text-lg/[inherit]"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>
          <div className="col-12 pt-20">
            <div className="row g-4 justify-center">
              {list?.map((item: FeatureSection, index: number) => (
                <div
                  key={index}
                  className="md:col-6 lg:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={200 + index * 50}
                >
                  <div className="min-h-full rounded-xl bg-light px-6 py-12 text-center md:rounded-3xl">
                    {item.icon && (
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary">
                        <ImageFallback
                          className="h-6 w-6 object-cover"
                          src={item.icon}
                          alt={`icon related to ${item.title}`}
                          width={24}
                          height={24}
                        />
                      </div>
                    )}
                    {item.title && (
                      <h3
                        className="h5 mb-2"
                        dangerouslySetInnerHTML={markdownify(item.title)}
                      />
                    )}
                    {item.description && (
                      <p
                        dangerouslySetInnerHTML={markdownify(item.description)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="row g-4 justify-center pt-16">
              {stats?.map((item: FeatureSection, index: number) => (
                <div
                  key={index}
                  className="md:col-4 lg:col-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={(stats.length - index) * 100}
                >
                  <div className="text-center">
                    {item.label && (
                      <p
                        className="mb-3 lg:text-lg/[inherit]"
                        dangerouslySetInnerHTML={markdownify(item.label)}
                      />
                    )}
                    {item.value && (
                      <h3
                        className="h2 lg:h1 mb-2"
                        dangerouslySetInnerHTML={markdownify(item.value)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
