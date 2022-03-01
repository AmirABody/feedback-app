import React from "react";

interface RatingSelectProps {
  min: number;
  max: number;
  rating: number;
  setRating: (rating: number) => void;
}

const RatingSelect = ({ min, max, rating, setRating }: RatingSelectProps) => {
  const selectNumbers = Array(max - min + 1)
    .fill(0)
    .map((el, index) => index + min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(+e.currentTarget.value);
  };

  return (
    <ul className="flex flex-row flex-wrap gap-x-2 gap-y-3 items-center justify-center mb-4 w-72 max-w-full mx-auto">
      {selectNumbers.map((num) => (
        <li key={num}>
          <input
            className="hidden peer"
            type="radio"
            id={`${num}`}
            name="rating"
            value={num}
            onChange={handleChange}
            checked={rating === num}
          />
          <div className="peer-checked:bg-amber-400 bg-amber-200 w-10 aspect-square rounded-full relative text-white hover:bg-amber-300 transition-all">
            <label
              htmlFor={`${num}`}
              className="absolute cursor-pointer w-full h-full flex items-center justify-center"
            >
              {num}
            </label>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
