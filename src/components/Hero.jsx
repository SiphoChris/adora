import UnderlineStroke from "./Underline-stroke";

function Hero() {
  return (
    <section className="mt-24">
      <div className="flex flex-col gap-8">
        <h1 className="text-primaryColor font-bold text-[62px] tracking-tighter text-center leading-[1.2] relative inline-block">
          Visualize your <span className="relative inline-block text-primaryColor">
            entire
            <span className="absolute top-16 left-0 w-full bottom-0">
              <UnderlineStroke />
            </span>
          </span>  
          <br /> product experience
        </h1>
        <p className="mx-auto w-[60ch] text-xl text-center">
          Every user-journey, every screen, every interaction. Your entire
          product mapped for you in real-time, overlaid with analytics and
          replays.
        </p>
        <div className="inline-flex mx-auto gap-4">
          <button className="bg-secondaryColor text-white">Join list</button>
          <button className="border border-1 border-gray-400">
            Watch - 1m
          </button>
        </div>
      </div>
      <div
        id="preview-bg"
        className="w-9/12 mx-auto mt-16 min-h-dvh rounded-3xl p-12"
      >
        <div>
            <img src="images/bg-video.png" alt="background video" className="rounded-3xl" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
