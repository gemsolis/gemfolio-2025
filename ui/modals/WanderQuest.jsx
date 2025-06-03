import Image from "next/image";
import wanderquest from "@/public/assets/images/wanderquest.png";

const WanderQuest = () => {
  return (
    <div className="enterAnimation w-full overflow-hidden p-10 flex gap-10 global-flex">
      <div className="rounded-md overflow-hidden w-[1000px]">
        <Image
          src={wanderquest}
          alt="Wander Quest"
          className="rounded-md object-cover"
        />
      </div>
      <div className="px-6 max-md:px-4 py-12 max-w-4xl mx-auto text-slate-400">
        <h1 className="global-title font-bold mb-8 text-gradient">
          Wander Quest
        </h1>
        <div className="flex flex-col my-4">
          <section className="py-4">
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              Client Overview:
            </h2>
            <p className="mb-4">
              Wander Quest is a travel company aiming to make world exploration
              affordable, exciting, and accessible for all types of travelers.
              Their platform offers destination guides, curated tours, expert
              travel advice, and booking services. Their brand tone is
              adventurous, vibrant, and customer-centric.
            </p>
          </section>

          <section className="py-4">
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              Client Pain Points:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm">
                The website needs to prioritize{" "}
                <strong>visual engagement</strong> to avoid overwhelming users
                with too much text and ensure better interaction.
              </li>
              <li className="text-sm">
                Users must be able to{" "}
                <strong>search and book tours quickly and intuitively</strong>{" "}
                to reduce drop-offs and improve conversions.
              </li>
              <li className="text-sm">
                Including <strong>trust signals</strong> like verified tours,
                customer reviews, and 24/7 support is essential to build user
                confidence in booking.
              </li>
              <li className="text-sm">
                The site should clearly communicate the brand’s{" "}
                <strong>unique selling points</strong> — such as a wide
                selection of tours, expert guides, and hassle-free booking.
              </li>
              <li className="text-sm">
                There needs to be a way to{" "}
                <strong>promote special discounts or offers</strong> without
                disrupting the overall user experience.
              </li>
            </ul>
          </section>

          <section className="py-4">
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              Designer Approach:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm">
                Created a <strong>visual storytelling layout</strong> by
                integrating vibrant imagery and travel scenes to immediately
                inspire adventure.
              </li>
              <li className="text-sm">
                Designed <strong>clear call-to-actions</strong> ("Get Started"
                buttons) strategically placed after selecting location, date,
                and person for an intuitive flow.
              </li>
              <li className="text-sm">
                Introduced <strong>trust badges</strong> ("100% Verified," "24/7
                Customer Support") and <strong>customer testimonials</strong> to
                build credibility.
              </li>
              <li className="text-sm">
                Highlighted <strong>key selling points</strong> with distinct
                feature sections ("Wide Selection of Tours," "Expert Tour
                Guides," "Hassle-Free Booking") using icons and short texts for
                quick scanning.
              </li>
              <li className="text-sm">
                Implemented a <strong>dynamic destination grid</strong> with
                ratings, pricing, and location markers to make browsing
                attractive and easy.
              </li>
              <li className="text-sm">
                Featured <strong>special promotions</strong> like the 50%
                discount in a bold, non-intrusive banner near the end of the
                page to capture user interest without feeling pushy.
              </li>
            </ul>
          </section>

          <section className="py-4">
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              The Results:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm">
                Increased user engagement by presenting visually stimulating and
                easy-to-navigate content.
              </li>
              <li className="text-sm">
                Reduced bounce rates by offering a streamlined and inviting
                search and booking process.
              </li>
              <li className="text-sm">
                Enhanced trust and credibility through the strategic placement
                of reviews, support assurances, and verified destination
                indicators.
              </li>
              <li className="text-sm">
                Boosted promotions and offers visibility without overwhelming
                the core browsing experience.
              </li>
              <li className="text-sm">
                Improved overall brand perception, aligning Wander Quest as an
                exciting, reliable, and user-friendly travel partner.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WanderQuest;
