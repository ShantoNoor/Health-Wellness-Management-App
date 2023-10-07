import { useNavigate } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import getValueFromLocalStorage from "../utility/getValueFromLocalStorage";
import { useState } from "react";

const Activity = () => {
  const localData = getValueFromLocalStorage("activity_list");
  const data = useGetData();
  const donated_list = data.filter((item) => localData.includes(item.id));
  const navigate = useNavigate();
  const [showLength, setShowLength] = useState(4);
  const [clickedShowAll, setClickedShowAll] = useState(false);

  return donated_list.length > 0 ? (
    <>
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-start">
        {donated_list.slice(0, showLength).map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-3 md:gap-6 rounded-lg overflow-hidden w-full"
              style={{ backgroundColor: item.card_bg_color }}
            >
              <img
                className="md:w-[220px] object-cover"
                src={
                  item.picture2
                }
                alt={`Picture of ${item.title}`}
              />
              <div className="flex flex-col justify-between gap-4 py-6 ml-8 md:ml-0">
                <div>
                  <span
                    style={{
                      padding: "5px 10px",
                      backgroundColor: item.category_bg_color,
                      color: item.text_button_bg_color,
                      borderRadius: "4px",
                    }}
                  >
                    {item.category}
                  </span>

                  <h1 className="text-2xl font-semibold text-black2 my-2">
                    {item.title}
                  </h1>
                  <h2
                    style={{
                      color: item.text_button_bg_color,
                      fontWeight: "600",
                    }}
                  >
                    ${item.price}.00
                  </h2>
                </div>
                <div>
                  <button
                    className="text-white text-md md:text-xl font-semibold px-4 py-3 rounded hover:-translate-y-2 duration-300 cursor-pointer active:-translate-y-1 hover:shadow-lg active:shadow-md"
                    style={{
                      backgroundColor: item.text_button_bg_color,
                    }}
                    onClick={() =>
                      navigate(`/donation/${item.id}`, {
                        state: { title: item.title },
                      })
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {!clickedShowAll && donated_list.length > 4 && (
        <button
          className="bg-[#009444] block mx-auto mt-10 text-white px-7 py-4 rounded-lg hover:bg-[#00AA44]"
          onClick={() => {
            setShowLength(donated_list.length);
            setClickedShowAll(true);
          }}
        >
          See All
        </button>
      )}
    </>
  ) : (
    <p className="mt-20 text-4xl lg:text-6xl font-extrabold text-center text-red1 max-w-[76%] mx-auto leading-[50px] lg:leading-[75px]">
      ☘️ Please, Donate and Make the Planet, a better place of others !
    </p>
  );
};

export default Activity;
