import ImageFallback from "@/helpers/ImageFallback";
import Link from "next/link";

const features = [
  {
    title: "Dedicated vEA Resources",
    description:
      "We assign experienced virtual Enterprise Architects who take ownership of your application portfolio. They act as an extension of your team, ensuring your software ecosystem is aligned with business objectives.",
    icon: "/images/icons/svg/detection.svg",
  },
  {
    title: "End-to-End Portfolio Management",
    description:
      "From onboarding applications to tracking financials, technical details, and lifecycles — our vEAs manage the complete portfolio and maintain continuous updates in your APM system.",
    icon: "/images/icons/png/log.png",
  },
  {
    title: "Strategic Technology Guidance",
    description:
      "vEAs provide recommendations on rationalization, integrations, compliance, and modernization to help reduce costs, increase agility, and eliminate redundancies.",
    icon: "/images/icons/svg/code.svg",
  },
];

const VirtualEASection = () => {
  return (
    <section className="section bg-theme-light">
      <div className="container">
        <div className="text-center mx-auto lg:w-2/3 mb-12">
          <h2 className="h3 mb-4">Virtual Enterprise Architect (vEA) Service</h2>
          <p>
            Our vEA service is tailored for organizations looking to offload the responsibility of managing their Application Portfolio.
            Instead of just using software, we assign skilled professionals who actively manage and optimize your portfolio using App Folio.
          </p>
        </div>

        <div className="row">
          {features.map((item, index) => (
            <div key={index} className="md:col-4 sm:col-6 col-12 mb-6">
              <div className="bg-white text-text-dark p-6 rounded shadow hover:shadow-lg transition duration-300 h-full">
                {item.icon && (
                  // <div className="mb-4 text-text-dark ">
                  //   <Image src={item.icon} alt={item.title} width={50} height={50}  className="text-text-dark "/>
                  // </div>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary">
                    <ImageFallback
                      className="h-6 w-6 object-cover"
                      src={item.icon}
                      alt={`icon related to ${item.title}`}
                      width={24}
                      height={24}
                    />
                  </div>
                )}
                
                <h3 className="h5 mb-2">{item.title}</h3>
                <p className="text-base text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/contact" className="btn btn-primary ml-0 px-6">
            Talk to an Expert
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VirtualEASection;
