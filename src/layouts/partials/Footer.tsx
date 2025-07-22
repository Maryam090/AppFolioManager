"use client";

import Logo from "@/components/Logo";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import { markdownify } from "@/lib/utils/textConverter";

// function replaceYear(text: string) {
//   const year = new Date().getFullYear();
//   return text.replace("{year}", year.toString());
// }

const { footer_menu, footer_quick_links } = menu;

const Footer = () => {
  return (
    <footer className="relative bg-light pt-16 xl:pt-28 overflow-hidden">
      {/* Decorative background image (right corner) */}
      {/* <img
        src="/images/footer-bg.svg"
        alt="Decorative"
        className="absolute right-0 bottom-0 w-[300px] opacity-10 pointer-events-none"
      /> */}

      <div className="container relative z-10" data-aos="fade-up-sm">
        <div className="row justify-between gap-y-12">
          {/* Logo + description */}
          <div className="sm:col-6 lg:col-4">
            <div className="mb-5">
              <Logo />
            </div>
            {config.params.footer_description && (
              <p
                className="text-base text-gray-800" // Consistent font size and color
                dangerouslySetInnerHTML={markdownify(config.params.footer_description)}
              />
            )}
          </div>

          {/* Navigation columns */}
          <div className="sm:col-6 md:col-6 lg:col-4">
            <div className="flex flex-wrap gap-10 sm:flex-nowrap md:justify-between">
              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-800">Resources</h3> {/* Consistent size & color */}
                <ul className="flex flex-col gap-2 text-base text-gray-700"> {/* Consistent size & color */}
                  {footer_menu.map((item, i) => (
                    <li key={i}>
                      <a
                        className="hover:text-tertiary transition"
                        href={item.url}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-medium text-gray-800">Quick Info</h3> {/* Consistent size & color */}
                <ul className="flex flex-col gap-2 text-base text-gray-700"> {/* Consistent size & color */}
                  {footer_quick_links.map((item, i) => (
                    <li key={i}>
                      <a
                        className="hover:text-tertiary transition"
                        href={item.url}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-14 border-t border-gray-300 py-6 text-center text-base font-medium text-gray-700">
          &copy; 2025 App Stack. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
