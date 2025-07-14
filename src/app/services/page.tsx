import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import Faq from "@/partials/Faq";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import VirtualEASection from "@/partials/VirtualEASection"; // 👈 New section

const Services = () => {
  const data: RegularPage = getListPage("about/_index.md");
  const { title, meta_title, description, image } = data.frontmatter;

  const faqData = getListPage("sections/faq.md").frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <VirtualEASection /> {/* 👈 New section for vEA */}
      <Faq content={faqData} />
      <CallToAction />
    </>
  );
};

export default Services;
