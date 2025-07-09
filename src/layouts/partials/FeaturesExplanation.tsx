import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { FeatureSection } from "@/types";

const FeaturesExplanation = ({
  hideHeadingBar,
}: {
  hideHeadingBar?: boolean;
}) => {
  const { subtitle, title, description, list } = getListPage(
    "sections/features-explanation.md"
  ).frontmatter;

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Section Header */}
        {!hideHeadingBar && (
          <div className="text-center mb-16" data-aos="fade-up-sm">
            {/* {subtitle && (
              <p
                className="mb-3 font-medium text-tertiary uppercase tracking-wide"
                dangerouslySetInnerHTML={markdownify(subtitle)}
              />
            )} */}
            {title && (
              <h2
                className="h2 mb-4"
                dangerouslySetInnerHTML={markdownify(title)}
              />
            )}
            {description && (
              <p
                className="text-lg/[inherit] text-default max-w-4xl mx-auto"
                dangerouslySetInnerHTML={markdownify(description)}
              />
            )}
          </div>
        )}

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {list?.map((group: FeatureSection, groupIndex: number) =>
            group.row.map((item: FeatureSection, index: number) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-6 bg-light p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                data-aos="fade-up-sm"
                data-aos-delay={index * 100}
              >
                {/* Square Image */}
                {item.image && (
                  <div className="w-full sm:w-40 aspect-square rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                    <ImageFallback
                      src={item.image}
                      alt={item.title}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Feature Content */}
                <div className="flex-1">
                  {item.title && (
                    <h3
                      className="h6 mb-2 text-default font-medium"
                      dangerouslySetInnerHTML={markdownify(item.title)}
                    />
                  )}
                  {item.description && (
                    <p
                      className="text-base text-gray-700"
                      dangerouslySetInnerHTML={markdownify(item.description)}
                    />
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturesExplanation;
