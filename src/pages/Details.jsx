import { useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { toast } from "react-toastify";
import setValueInLocalStorage from "../utility/setValueInLocalStorage";
import getValueFromLocalStorage from "../utility/getValueFromLocalStorage";
import Spinner from "../components/Spinner";

const Details = () => {
  const { id } = useParams();
  const [data] = useGetData(parseInt(id));

  const handleClick = (id, text) => {
    const activity_list = getValueFromLocalStorage("activity_list");
    text = text.split(' ')[0]

    if (activity_list.find((d_id) => d_id === id)) {
      toast.success(`Already ${text}ed!`);
      return;
    }

    activity_list.push(id);
    setValueInLocalStorage(activity_list, "activity_list");
    toast.success(`Successfully ${text}ed!`);
  };

  return (
    <div data-aos="slide-up">
      {data ? (
        <>
          <div className="mt-5 flex flex-col lg:flex-row gap-5 items-center">
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden relative">
              <img
                loading={"lazy"}
                className="w-full object-cover"
                src={data.image}
                alt={`Picture of ${data.name}`}
              />
              <div
                className="absolute bottom-0 p-5 md:p-9 w-full flex items-center justify-between"
                style={{ background: "rgba(11, 11, 11, 0.5)" }}
              >
                <div className="text-white text-sm md:text-xl font-semibold p-2 md:px-6 md:py-4 rounded  bg-red-600">
                  Price ${data.price}
                </div>
                <div className="text-white text-sm md:text-xl font-semibold p-2 md:px-6 md:py-4 rounded  bg-green-600">
                  {data.category}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold text-black mb-6">
                  {data.name}
                </h1>
                <p className="text-black leading-[30px] text-justify">
                  {data.description}
                </p>
              </div>
              <button
                className="text-white text-xl md:text-xl font-semibold p-3 md:px-6 md:py-4 mt-6 rounded hover:-translate-y-2 duration-300 cursor-pointer active:-translate-y-1 bg-blue-600 hover:shadow-lg active:shadow-md"
                onClick={() => handleClick(data.id, data.buttonText)}
              >
                {data.buttonText}
              </button>
            </div>
          </div>
        </>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};

export default Details;
