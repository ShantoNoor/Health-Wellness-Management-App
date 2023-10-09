import { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cards = ({ data, lg, disabled, len }) => {
  const navigate = useNavigate();
    const [showLength, setShowLength] = useState(len);

  return (
    <>
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 ${
          lg > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"
        } gap-6 justify-items-center`}
      >
        {data?.slice(0, showLength).map((item) => (
          <div
            key={item.id}
            className="rounded-lg p-4 bg-white duration-300 hover:shadow-xl active:shadow-lg flex flex-col justify-between"
          >
            <div className="relative">
              <div className="badge absolute top-2 right-2 bg-blue-400 text-white opacity-90 p-3">
                {item.category}
              </div>
              <img
                loading={"lazy"}
                className="w-full"
                src={item.image}
                alt={item.name}
              />
              <p className="text-gray-700 text-base font-semibold mt-4 mb-3">
                {item.name}
              </p>
              <p className="text-gray-700 text-sm font-normal mb-5 text-justify">
                {item.description.slice(0, 100)}
                <span
                  onClick={() =>
                    navigate("/details/" + item.id, {
                      state: { title: item.name },
                    })
                  }
                  className="font-bold text-blue-600 cursor-pointer block"
                >
                  .... READ MORE
                </span>
              </p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-7">
                <div className="flex gap-1 items-center">
                  {/* <img loading={"lazy"} className="w-6 h-6" src={dollarLogo} alt="doller-logo" /> */}
                  <p className="text-gray-700 text-base font-medium flex items-center">
                    Price: {item.price} <FaDollarSign />
                  </p>
                </div>
              </div>
              <button
                className={`text-lg font-medium bg-blue-500 text-white w-full rounded-[4px] py-2 ${
                  !disabled &&
                  "duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-[-2px] active:shadow-sm"
                }`}
                onClick={() =>
                  navigate("/details/" + item.id, {
                    state: { title: item.name },
                  })
                }
                disabled={disabled}
              >
                {disabled
                  ? item.buttonText.split(" ")[0] + "ed"
                  : item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      {data.length > len && (
        <button
          className="bg-[#009444] block mx-auto mt-10 text-white px-6 py-3 rounded-lg hover:bg-[#00AA44]"
          onClick={() => {
            setShowLength((prevLen) => {
              return prevLen === len ? data?.length : len;
            });
          }}
        >
          {showLength === len ? "See All" : "See Less"}
        </button>
      )}
    </>
  );
};

export default Cards;
