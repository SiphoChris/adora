import RealtimeSVG from "./Realtime-svg";

function References() {
  return (
    <section className="py-16 text-center">
      <div>
        <h2 className="text-[48px] font-bold tracking-tighter leading-tight text-primaryColor">
          Your product team&apos;s new <br /> source-of-truth
        </h2>
        <p className="my-6">Loved by product-obsessed teams</p>
        <img
          src="https://d2n74cft8djnwm.cloudfront.net/wp-content/uploads/2025/02/10123322/newlogos-desktop.svg"
          alt="reference image"
          className="mx-auto"
        />
      </div>
      <div className="mt-16 flex justify-evenly items-center">
        <div className="text-left">
          <span className="inline-flex gap-2 text-sm text-[#592eff] border-2 border-[#592eff] py-2 px-6 rounded-xl font-semibold">
          <RealtimeSVG/>
            REAL-TIME
          </span>
          <h2 className="text-[48px] font-bold tracking-tighter leading-tight text-primaryColor">
            Screenshots that <br />
            never go stale
            </h2>
        </div>
        <div>
            <p className="w-[45ch] text-left">Forget manual user journey mapping. Adora automatically maps your live product screens so you can see what your users experience in real-time.</p>
        </div>
      </div>
    </section>
  );
}

export default References;
