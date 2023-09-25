import { Link } from 'react-router-dom';

const Donation = ({ donation }) => {
  const {
    id,
    card_bg_color,
    category,
    category_bg_color,
    description,
    picture,
    price,
    text_button_bg_color,
    title,
  } = donation || {};
  return (
    <Link to={`/donation/${id}`}>
      <div className="my-5 ">
        <div className=" sm:w-42 mr-16 md:w-80 lg:rounded-md  pl-12">
          <figure>
            <img src={picture} />
          </figure>

          <div
            className=" md:h-28  lg:h-28 w-76 rounded-b-lg"
            style={{ backgroundColor: `${card_bg_color}` }}
          >
            <button
              style={{ color: `${text_button_bg_color}` }}
              className=" my-1 ml-2 px-1 rounded-sm bg-white"
            >
              {category}
            </button>
            <h2
              style={{ color: `${text_button_bg_color}` }}
              className="ml-2 pb-2 text-white text-2xl font-bold"
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Donation;
