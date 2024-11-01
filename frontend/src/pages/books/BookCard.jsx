import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${book._id}`}>
            <img
              src={`${getImgUrl(book.coverImage)}`}
              alt="Book Cover Image"
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/books/${book._id}`}>
            <h3 className="text-xl font-primary font-semibold hover:text-blue-600 mb-3">
              {
                book.title
              }
            </h3>
          </Link>
          <p className="font-secondary text-gray-600 mb-5">{ book.description.length > 80 ? `${book.description.slice(0, 80)}...` : `${book.description}` }</p>
          <p className="font-primary font-medium mb-5">
          Gh₵ { book.newPrice } <span className="line-through font-normal ml-2">Gh₵ { book.oldPrice }</span>
          </p>
          <button
            onClick={() => handleAddToCart(book)}
            className="btn-primary space-x-1 flex items-center gap-1">
            <FiShoppingCart />
            <span className='font-primary'>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookCard;
