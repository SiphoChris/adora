const UnderlineStroke = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={158}
      height={18}
      fill="none"
      className="stroke-pink-3"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        stroke="#f843c2"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1 15c10-5 30-10 40-5s15 5 25 0 20-5 30 0 20 5 30 0 30-10 30-10"
      />
    </svg>
);
export default UnderlineStroke;
