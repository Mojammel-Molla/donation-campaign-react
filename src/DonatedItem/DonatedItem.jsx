import React from 'react';
import { Link } from 'react-router-dom';

const DonatedItem = ({ donate }) => {
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
  } = donate || {};
  return (
    <div>
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-3/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6
            style={{
              color: `${text_button_bg_color}`,
              backgroundColor: `${card_bg_color}`,
            }}
            className="mb-4 py-1 text-lg  text-center rounded-md font-semibold "
          >
            {category}
          </h6>
          <h4 className="mb-2 block text-2xl font-semibold   ">{title}</h4>
          <h3
            style={{ color: `${text_button_bg_color}` }}
            className="text-2xl font-bold pb-2"
          >
            ${price}
          </h3>
          <Link to={`/donation/${id}`}>
            <button
              style={{ backgroundColor: `${text_button_bg_color}` }}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle  text-xl font-bold  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-white"
              type="button"
            >
              View detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonatedItem;
