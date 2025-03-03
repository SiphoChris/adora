import cardContent from '../lib/constants';
import Card from './Card';

function Cards() {
  return (
    <ul className="grid grid-cols-4 grid-rows-1 gap-16 mt-16 w-[90%] mx-auto">
      {cardContent.map((card, index) => (
        <li key={index} className="even:-translate-y-8">
          <Card 
            imageUrl={card.imageUrl}
            title={card.title}
            page={card.page}
            details={card.details}
          />
        </li>
      ))}
    </ul>
  );
}

export default Cards;
