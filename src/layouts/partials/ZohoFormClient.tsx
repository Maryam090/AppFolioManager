// ZohoFormClient.tsx (Client Component)
"use client";

import { useRef } from "react";

const ZohoFormClient = () => {
  const zohoFormRef = useRef<HTMLFormElement | null>(null);
  const submittedViaIframe = useRef(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const zohoForm = zohoFormRef.current;
    if (!zohoForm) return;

    while (zohoForm.firstChild && zohoForm.childNodes.length > 5) {
      const lastChild = zohoForm.lastChild;
      if (lastChild) zohoForm.removeChild(lastChild);
    }

    const addField = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      zohoForm.appendChild(input);
    };

    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    addField("Contact Name", nameInput.value);
    addField("Email", form["email"].value);
    addField("Subject", form["subject"].value);
    addField("Description", form["message"].value);
    if (form["comapny-name"].value.trim()) {
      addField("Organization Name", form["comapny-name"].value.trim());
    }

    submittedViaIframe.current = true;
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe[name="zohoSubmitFrame"]',
    );
    if (iframe) {
      iframe.onload = () => {
        if (!submittedViaIframe.current) return;
        submittedViaIframe.current = false;
        alert("Your message has been submitted successfully.");
        form.reset();
      };
    }

    zohoForm.submit();
  };

  return (
    <div
      className="relative pt-24 lg:col-12 lg:pt-16"
      data-aos="fade-left-sm"
      data-aos-delay="200"
    >
      <div className="rounded-2xl bg-light p-5 md:p-10">
        <form className="row g-4" onSubmit={handleSubmit}>
          <div className="lg:col-12">
            <label htmlFor="name" className="form-label">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              className="form-input"
              required
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              className="form-input"
              required
              type="email"
              placeholder="youremail@email.com"
            />
          </div>
          <div className="col-12">
            <label htmlFor="comapny-name" className="form-label">
              Company Name (Optional)
            </label>
            <input
              id="comapny-name"
              name="comapny-name"
              className="form-input"
              placeholder="Your Company Name"
              type="text"
            />
          </div>
          <div className="col-12">
            <label htmlFor="subject" className="form-label">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              className="form-input"
              required
              placeholder="Subject"
              type="text"
            />
          </div>
          <div className="col-12">
            <label htmlFor="message" className="form-label">
              Write Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              required
              placeholder="Write Your Message Here"
              rows={3}
            ></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-regular">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Hidden Zoho Form */}
      <form
        ref={zohoFormRef}
        action="https://desk.zoho.com/support/WebToCase"
        method="POST"
        encType="multipart/form-data"
        target="zohoSubmitFrame"
        style={{ display: "none" }}
      >
        <input
          type="hidden"
          name="xnQsjsdp"
          value="edbsn84956e45572250c2a4af1af8ccacc01f"
        />
        <input
          type="hidden"
          name="xmIwtLD"
          value="edbsn5e88bfafe1e94119243ac49a5a2c99d6f9750fcf249df562a33d4ab5b08ad4fa"
        />
        <input type="hidden" name="xJdfEaS" value="" />
        <input type="hidden" name="actionType" value="Q2FzZXM=" />
        <input
          type="hidden"
          name="returnURL"
          value="https://app-folio.vercel.app/login"
        />
      </form>
      <iframe name="zohoSubmitFrame" style={{ display: "none" }}></iframe>
    </div>
  );
};

export default ZohoFormClient;
