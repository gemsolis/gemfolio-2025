import Image from "next/image";

import fitbygrace from "@/public/assets/images/fitbygrace.png";

const FitByGrace = () => {
  return (
    <div className="enterAnimation w-full overflow-hidden p-10 flex gap-10 global-flex">
      <div className="rounded-md overflow-hidden w-[1000px]">
        <Image
          src={fitbygrace}
          alt="Fit Fuel by Grace"
          className="rounded-md object-cover"
        />
      </div>
      <div className="px-6 max-md:px-4 py-12 max-w-4xl mx-auto text-slate-400">
        <h1 className="global-title font-bold mb-8 text-gradient">
          Fit Fuel by Grace
        </h1>
        <div className="flex flex-col my-4">
          <section className="py-4">
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              Client Overview:
            </h2>
            <p className="mb-4">
              Fit Fuel by Grace is a personal fitness coaching brand designed to
              help individuals achieve their best shape efficiently, without
              guesswork. Grace, the founder and coach, offers structured fitness
              programs, guidance, and accountability to clients worldwide,
              focusing on sustainable fat loss and body transformation.
            </p>
          </section>
          <section className="py-4">
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              Client Pain Points:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm">
                <strong>Difficulty Standing Out:</strong> The brand needs a
                distinctive presence to differentiate itself from generic
                fitness programs online.
              </li>
              <li className="text-sm">
                <strong>Program Uncertainty:</strong> Visitors must clearly
                understand what they’re signing up for, including outcomes and
                what’s included.
              </li>
              <li className="text-sm">
                <strong>Low Lead Conversion Risk:</strong> Without a clear
                explanation of the personalized, data-driven coaching model,
                users may not convert.
              </li>
              <li className="text-sm">
                <strong>Trust Building Needed:</strong> Establishing authority,
                showcasing real success stories, and promoting community are
                essential for credibility.
              </li>
              <li className="text-sm">
                <strong>Clear Signup Flow Required:</strong> Pricing packages
                and sign-up steps should be transparent, guided, and
                user-friendly from the start.
              </li>
              <li className="text-sm">
                <strong>Need for a Strong Visual Identity:</strong> The website
                must reflect the brand’s unique personality, professionalism,
                and energy.
              </li>
              <li className="text-sm">
                <strong>Effective Program Presentation:</strong> Core services
                and offerings should be presented in a visually appealing,
                organized, and digestible way.
              </li>
              <li className="text-sm">
                <strong>Highlighting Key Services:</strong> It should be easy
                for visitors to quickly grasp what’s offered and how it benefits
                them.
              </li>
              <li className="text-sm">
                <strong>Building Trust and Credibility:</strong> Featuring
                testimonials, transformations, and expert validation will help
                create confidence in the brand.
              </li>
              <li className="text-sm">
                <strong>Simple Contact and Inquiry Flow:</strong> Users should
                be able to easily reach out, ask questions, or get started
                without friction.
              </li>
            </ul>
          </section>
          <section className="py-4">
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              Designer Approach:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm">
                <strong>Powerful Hero Section:</strong> Featured Grace in action
                with a strong CTA ("Start Your Journey") to inspire immediate
                action.
              </li>
              <li className="text-sm">
                <strong>Emotional Messaging:</strong> Used motivational language
                ("No more guesswork, just results") to connect with user
                frustration.
              </li>
              <li className="text-sm">
                <strong>Credibility Metrics:</strong> Highlighted key proof
                points (300+ transformations, 200+ success stories) early.
              </li>
              <li className="text-sm">
                <strong>Clear Unique Solution:</strong> Explained "The Fit-Fuel
                Method" in a concise, easy-to-understand way.
              </li>
              <li className="text-sm">
                <strong>Program Benefits Visualization:</strong> Designed
                badge-like features listing benefits (habit tracking, expert
                guidance, etc.).
              </li>
              <li className="text-sm">
                <strong>Trust-Boosting Content:</strong> Added personal story,
                client testimonials carousel, and transparent FAQs.
              </li>
              <li className="text-sm">
                <strong>Simple, Attractive Pricing:</strong> Created clear,
                easy-to-read pricing tiers (Starter, Elite, VIP Intensive).
              </li>
              <li className="text-sm">
                <strong>Lead Magnet Strategy:</strong> Offered a free "7-Day Fat
                Loss Kickstart" to grow the email list.
              </li>
              <li className="text-sm">
                <strong>Addressing Objections:</strong> FAQ accordion answered
                common concerns to reduce hesitation.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="global-subheading font-semibold mb-4 fade-gradient">
              The Results:
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm">
                <strong>Stronger Emotional Connection:</strong> Visual
                storytelling and targeted copy increased motivation and
                engagement.
              </li>
              <li className="text-sm">
                <strong>Higher Conversions:</strong> Clear program breakdowns
                and multiple CTAs led to more signups.
              </li>
              <li className="text-sm">
                <strong>Increased Trust:</strong> Client success stories and
                metrics boosted authority and credibility.
              </li>
              <li className="text-sm">
                <strong>Lead Capture Growth:</strong> Free offer successfully
                captured future prospects for nurturing.
              </li>
              <li className="text-sm">
                <strong>Simplified Signup Journey:</strong> Users found the
                journey from interest to commitment easy and motivating.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FitByGrace;
