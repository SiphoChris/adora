import { QuoteIcon } from "lucide-react";

function Testimonial() {
  return (
    <div className="grid grid-cols-2 my-32 w-8/12 mx-auto items-center bg-[#dfff9d] gap-16 rounded-[3rem] p-4">
      <div>
        <img
          src="https://www.adora.so/_next/image?url=https%3A%2F%2Fd2n74cft8djnwm.cloudfront.net%2Fwp-content%2Fuploads%2F2025%2F02%2F10123311%2FFrame-427322528-2.png&w=1920&q=100"
          alt="testimonial image"
        />
      </div>
      <div className="space-y-12">
        <p>
          <span>
            <QuoteIcon fill="#6036ff"   />
          </span>
          <span className="text-3xl font-bold">
            Adora is a product team&apos;s <br /> cheat-code to building <br />{" "}
            cohesive end-to-end <br /> journeys.
          </span>
        </p>
        <div className="flex gap-3  items-center" >
          <div>
            <img
              src="https://d2n74cft8djnwm.cloudfront.net/wp-content/uploads/2025/01/10123512/Frame-427322356.svg"
              alt="linktree icon"
            />
          </div>
          <div>
            <p className="font-bold">Alex Zaccaria</p>
            <p className="text-xs text-slate-700">Co-founder and CEO of Linktree</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
