import Image from "next/image";
import aurras from "@/public/assets/images/aurras.png";
import SecondaryButton from "../buttons/SecondaryButton";

const AurrasApp = () => {
  return (
    <div className="enterAnimation w-full overflow-hidden p-10">
      <div className="flex items-start gap-10 global-flex">
        <Image
          src={aurras}
          alt="Aurras App"
          className="w-[60%] h-auto rounded-md object-contain"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />

        {/* Text content takes 50% */}
        <div className="text-slate-400 flex flex-col gap-6">
          <section>
            <h2 className="global-cardtitle font-semibold mb-4 fade-gradient">
              About Aurras
            </h2>
            <p>
              Aurras is a music player app designed for instrumental streaming
              and serves as a platform for artists to showcase their original
              compositions. It features customizable options that allow users to
              layer environmental sounds, pure waveforms, and frequencies in the
              background—enhancing the listening experience for motivational,
              therapeutic, and meditative purposes.
            </p>
          </section>

          <section>
            <h2 className="global-cardtitle font-semibold mb-4 fade-gradient">
              Role
            </h2>
            <p>
              For years, I've been listening to diverse instrumental and mixes
              to keep me motivated or to make me fall asleep when insomnia hits.
              With the help of piano pieces along with specific binaural beats
              in the background, I'm able to keep my focus and harness my
              creativity all day long. Not only do these types of music
              entertain and motivate, but they also offer inner healing and
              elevate happiness frequency. But often, the artists behind these
              instrumentals are not recognized unlike in mainstream music. So I
              want to build a community inside a mobile app where artists can
              show off their masterpieces and help listeners access them easily.
            </p>
          </section>

          <div className="flex">
            <SecondaryButton
              title="View Vision Board in Behance"
              url="https://www.behance.net/gallery/224840877/Aurras-Music-Player-UX-Case-Study"
              link_target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AurrasApp;
