"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";

const NotFound = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <SeoMeta title={"Page Not Found"} />
      <section className="section text-center">
        <div className="container" data-aos="fade-up-sm">
          <div className="row justify-center">
            <div className="sm:col-10 md:col-8 lg:col-7 text-center">
              <ImageFallback
                className="mx-auto mb-16 block w-[480px]"
                src="/images/404.svg"
                alt=""
                width={480}
                height={780}
                priority
              />
              <h1 className="h2 md:h1 mb-4">Oops! Page Not Found</h1>
              <Link href="/" className="btn btn-dark mt-8">
                Back to home
                <span className="icon-wrapper">
                  <span className="icon">
                    <DynamicIcon icon={"FaArrowRight"} />
                  </span>
                  <span className="icon" aria-hidden="true">
                    <DynamicIcon icon={"FaArrowRight"} />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
