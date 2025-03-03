function Card({ imageUrl, title, page, details }) {
  return (
    <article
      className="border-gray-300 border-2 rounded-3xl p-2 
      "
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className=" object-cover object-center w-full h-36 rounded-2xl"
        />
        <span className="bg-slate-950 text-white px-2 py-1 text-xs rounded-full absolute top-2 right-2 z-10 flex items-center">
          <span className="w-3 h-3 rounded-full inline-block mr-1 bg-green-600"></span>
          LIVE
        </span>
      </div>

      <div className="mt-4 border-b pb-2 border-gray-300">
        <p className="text-xs mb-2">{title}</p>
        <p className="text-md text-primaryColor font-bold">{page}</p>
      </div>

      <ul className="mt-4 space-y-2">
        {details?.map((detail, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 rounded"
          >
            <span className="flex items-center gap-2">
              <span className="text-md">{detail.icon}</span>
              <span>{detail.title}</span>
            </span>
            <span className="text-sm font-semibold">{detail.status}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Card;
