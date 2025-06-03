import Image from "next/image";
import tmc from "@/public/assets/images/tmc.png";

const TmcCctv = () => {
  return (
    <div className="enterAnimation w-full overflow-hidden p-10 flex gap-10 global-flex">
      <div className="rounded-md overflow-hidden w-[1000px]">
        <Image
          src={tmc}
          alt="TMC CCTV Website"
          className="rounded-md object-cover"
        />
      </div>
      <div className="px-6 max-md:px-4 py-12 max-w-4xl mx-auto text-slate-400">
        <h1 className="global-title font-bold mb-8 text-gradient">
          TMC CCTV and Structured Cabling
        </h1>
        <div className="flex flex-col my-4">
          <section className="py-4">
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              Client Overview:
            </h2>
            <p className="mb-4">
              TMC CCTV and Structured Cabling is a Cavite-based business
              offering professional CCTV installation and structured cabling
              solutions for homes and commercial establishments. With the rise
              of property crimes and the growing demand for digital
              surveillance, TMC needed a reliable online presence to highlight
              their expertise and encourage customer inquiries.
            </p>
          </section>

          <section className="py-4">
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              Client Pain Points:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm">
                <strong>No official website</strong> to showcase their
                portfolio, services, and expertise, making it harder to
                establish credibility online.
              </li>
              <li className="text-sm">
                <strong>Low visibility in search engines</strong> due to lack of
                SEO-optimized content or a Google-indexable web presence.
              </li>
              <li className="text-sm">
                <strong>Manual and inconsistent inquiries</strong> received only
                through social media or word-of-mouth, leading to missed
                opportunities.
              </li>
              <li className="text-sm">
                Difficulty communicating the <strong>range of services</strong>{" "}
                and technical details to non-tech-savvy clients.
              </li>
              <li className="text-sm">
                No dedicated section to highlight{" "}
                <strong>customer feedback</strong>, service benefits, or trust
                signals to reassure new prospects.
              </li>
            </ul>
          </section>

          <section className="py-4">
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              Designer Approach:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm">
                Developed a <strong>clean and modern website</strong> that
                reflects TMC’s professionalism and focuses on ease of
                navigation.
              </li>
              <li className="text-sm">
                Used a <strong>tech-inspired color palette</strong> (black, red,
                and white) to visually convey security, boldness, and
                reliability.
              </li>
              <li className="text-sm">
                Structured content into <strong>clear service sections</strong>{" "}
                with icons and descriptions, making it simple for visitors to
                understand offerings at a glance.
              </li>
              <li className="text-sm">
                Included multiple <strong>call-to-action buttons</strong> like
                “Inquire Now” and “Get a Quote” across the homepage and service
                pages to drive conversions.
              </li>
              <li className="text-sm">
                Implemented a <strong>client testimonial section</strong> to add
                authenticity and trustworthiness, helping potential clients feel
                more confident in their decision.
              </li>
              <li className="text-sm">
                Created a <strong>mobile-friendly layout</strong> to ensure
                seamless viewing and inquiry submission from phones and tablets.
              </li>
            </ul>
          </section>

          <section className="py-4">
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              The Results:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm">
                TMC now has a <strong>professional digital presence</strong>{" "}
                that effectively represents their services and brand, helping
                them stand out from competitors.
              </li>
              <li className="text-sm">
                The new website significantly{" "}
                <strong>streamlined client inquiries</strong>, making it easier
                for users to contact TMC or request quotes with just a few
                clicks.
              </li>
              <li className="text-sm">
                Client reviews and clearly stated benefits helped build
                <strong>trust and confidence</strong> among first-time visitors.
              </li>
              <li className="text-sm">
                SEO-ready content and structured layout improved
                <strong>online discoverability</strong> via Google search.
              </li>
              <li className="text-sm">
                Overall, the project elevated TMC’s brand perception as a
                <strong>
                  modern, dependable, and customer-focused service provider
                </strong>
                in the local security and cabling industry.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TmcCctv;
