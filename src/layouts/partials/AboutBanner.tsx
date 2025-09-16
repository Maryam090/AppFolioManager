import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const AboutBanner = () => {
  const { title, subtitle, description, left_image, quote } =
    getListPage("sections/about-banner.md").frontmatter;

  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up-sm">
          {subtitle && (
            <p
              className="mb-2 font-medium text-tertiary"
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
              className="mb-10 text-lg/[inherit]"
              dangerouslySetInnerHTML={markdownify(description)}
            />
          )}
        </div>

        {left_image && (
          <div className="flex justify-center mb-10" data-aos="fade-up-sm" data-aos-delay="100">
            <ImageFallback
              className="rounded-2xl object-cover h-[400px] w-full max-w-4xl"
              src={left_image}
              alt={`image related to ${title}`}
              width={800}
              height={400}
            />
          </div>
        )}

        {quote && (
          <div
            className="relative mx-auto max-w-3xl rounded-2xl bg-tertiary p-6 pt-10 text-text-light text-center"
            data-aos="fade-up-sm"
            data-aos-delay="200"
          >
            <div className="mb-4 flex justify-center items-center gap-5">
              <ImageFallback
                className="h-16 w-16 rounded-full object-cover"
                src={quote.avatar}
                alt={`avatar related to ${quote.name}`}
                width={100}
                height={100}
              />
              <div className="text-left">
                <h3
                  className="h6 text-inherit"
                  dangerouslySetInnerHTML={markdownify(quote.name)}
                />
                <p
                  className="text-inherit"
                  dangerouslySetInnerHTML={markdownify(quote.designation)}
                />
              </div>
            </div>

            {quote.content && (
              <p
                className="text-lg/[inherit] text-inherit"
                dangerouslySetInnerHTML={markdownify(quote.content)}
              />
            )}

            <ImageFallback
              className="pointer-events-none absolute left-1/2 top-6 h-[2px] w-[90%] -translate-x-1/2 object-cover"
              src="/images/quote-line.png"
              alt=""
              width={600}
              height={2}
            />
            <ImageFallback
              className="pointer-events-none absolute -bottom-4 -right-4 h-36 w-40 object-contain"
              src="/images/quote-bg-shape.png"
              alt=""
              width={600}
              height={600}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutBanner;
