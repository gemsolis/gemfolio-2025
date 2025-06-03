import Image from "next/image";
import pixelforge from "@/public/assets/images/pixelforge.png";

const PixelForge = () => {
  return (
    <div className="enterAnimation w-full overflow-hidden p-10 flex gap-10 global-flex">
      <div className="rounded-md overflow-hidden w-[1000px]">
        <Image
          src={pixelforge}
          alt="Pixel Forge"
          className="rounded-md object-cover"
        />
      </div>
      <div className="px-6 max-md:px-4 py-12 max-w-4xl mx-auto text-slate-400">
        <h1 className="global-title font-bold mb-8 text-gradient">
          PixelForge Creative
        </h1>
        <div className="flex flex-col my-4">
          <section className="py-4">
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              Client Pain Points:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm">
                <strong>No Existing Online Presence:</strong> PixelForge
                Creative needed a brand-new website to introduce their services
                to the market.
              </li>
              <li className="text-sm">
                <strong>Lack of Brand Storytelling:</strong> They wanted to
                showcase their unique approach and expertise clearly and
                memorably.
              </li>
              <li className="text-sm">
                <strong>Trust Building:</strong> As a new brand, it was crucial
                to immediately establish credibility and foster trust with
                potential clients.
              </li>
              <li className="text-sm">
                <strong>Service Clarity:</strong> They needed a simple yet
                powerful way to explain their service offerings and project
                workflow.
              </li>
              <li className="text-sm">
                <strong>Encouraging Engagement:</strong> Without an established
                reputation, they required strong calls-to-action and customer
                interaction points throughout the site.
              </li>
            </ul>
          </section>
          <section className="py-4">
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              Designer Approach:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm">
                <strong>Impactful First Impression:</strong> Crafted a bold hero
                section with dynamic typography and engaging CTAs ("Get Started"
                and "Learn More") to immediately grab attention.
              </li>
              <li className="text-sm">
                <strong>Highlighting Achievements:</strong> Even as a new brand,
                the website highlights key statistics (years of experience,
                completed projects, clients served) to build authority.
              </li>
              <li className="text-sm">
                <strong>Clear Service Presentation:</strong> Designed an
                "Enhance Your Digital Presence" section using easy-to-digest
                service cards and supportive graphics.
              </li>
              <li className="text-sm">
                <strong>Seamless Process Visualization:</strong> Introduced a
                step-by-step "Our Seamless Process" section to simplify
                understanding of the client journey.
              </li>
              <li className="text-sm">
                <strong>Building Trust Through Humanization:</strong> Showcased
                real testimonials and professional team portraits to make the
                brand relatable and trustworthy.
              </li>
              <li className="text-sm">
                <strong>Interactive Support:</strong> Added an expandable FAQ
                section to preemptively answer common questions and encourage
                deeper exploration.
              </li>
              <li className="text-sm">
                <strong>Consistent Visual Identity:</strong> Used a futuristic
                color palette (black, teal, electric green) and visual elements
                that resonate with their tech-forward brand positioning.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              The Results:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm">
                <strong>Professional Digital Launch:</strong> PixelForge
                Creative successfully entered the digital space with a polished,
                professional, and memorable brand presence.
              </li>
              <li className="text-sm">
                <strong>Increased Client Confidence:</strong> The website’s
                structure and testimonials helped quickly establish trust with
                potential clients.
              </li>
              <li className="text-sm">
                <strong>Higher Engagement:</strong> Clear navigation,
                interactive FAQs, and multiple CTAs led to longer time spent
                on-site and more inquiry submissions.
              </li>
              <li className="text-sm">
                <strong>Clear Brand Messaging:</strong> Visitors now easily
                understand PixelForge’s services, process, and unique value
                proposition from the moment they land on the homepage.
              </li>
              <li className="text-sm">
                <strong>Positive Brand Perception:</strong> The website
                positioned PixelForge Creative as an innovative, expert-driven,
                and reliable digital partner.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PixelForge;
