// 📁 components/ContactHero.tsx (Server Component)
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import ZohoFormClient from "./ZohoFormClient";

const ContactHero = () => {
  const { hero } = getListPage("contact/_index.md").frontmatter;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="lg:col-6 lg:pe-12 lg:pt-16" data-aos="fade-left-sm">
            {hero.subtitle && (
              <p
                className="mb-2 font-medium text-tertiary"
                dangerouslySetInnerHTML={markdownify(hero.subtitle)}
              />
            )}
            {hero.title && (
              <h2
                className="md:h1 mb-6"
                dangerouslySetInnerHTML={markdownify(hero.title)}
              />
            )}
            {hero.description && (
              <p
                className="text-lg/[inherit]"
                dangerouslySetInnerHTML={markdownify(hero.description)}
              />
            )}
            {hero.list && (
              <div className="mt-10 flex flex-col gap-10 xl:mt-12">
                {hero.list.map((point: any, i: any) => (
                  <div key={i}>
                    {point.icon && (
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary">
                        <ImageFallback
                          className="h-6 w-6 object-cover"
                          src={point.icon}
                          alt={`icon related to ${point.title}`}
                          width={24}
                          height={24}
                        />
                      </div>
                    )}
                    {point.title && (
                      <h3
                        className="h6 mb-2 mt-5"
                        dangerouslySetInnerHTML={markdownify(point.title)}
                      />
                    )}
                    {point.description && (
                      <p
                        className="text-lg/[inherit]"
                        dangerouslySetInnerHTML={markdownify(point.description)}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative pt-24 lg:col-6 lg:pt-16"
            data-aos="fade-left-sm"
            data-aos-delay="200"
          >
            <ZohoFormClient />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
