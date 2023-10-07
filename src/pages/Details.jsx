import { useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import setValueInLocalStorage from "../utility/setValueInLocalStorage";
import getValueFromLocalStorage from "../utility/getValueFromLocalStorage";
import Spinner from "../components/Spinner";

const Details = () => {
  const { id } = useParams();
  const [data] = useGetData(parseInt(id));

  const handleClick = (id) => {
    const donate_list = getValueFromLocalStorage("donate_list");

    if (donate_list.find((d_id) => d_id === id)) {
      toast.success("Already Donated! 😇", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    donate_list.push(id);
    setValueInLocalStorage(donate_list, "donate_list");

    toast.success("Donate Successful! 😇", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      {data ? (
        <>
          <div className="mt-5 flex flex-col lg:flex-row gap-5 items-center">
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden relative">
              <img
                className="w-full object-cover"
                src={data.image}
                alt={`Picture of ${data.name}`}
              />
              <div
                className="absolute bottom-0 p-5 md:p-9 w-full flex items-center justify-between"
                style={{ background: "rgba(11, 11, 11, 0.5)" }}
              >
                <div className="text-white text-xl md:text-xl font-semibold p-3 md:px-6 md:py-4 rounded  bg-red-600">
                  Price ${data.price}
                </div>
                <div className="text-white text-xl md:text-xl font-semibold p-3 md:px-6 md:py-4 rounded  bg-green-600">
                  {data.category}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-bold text-black mb-6">
                  {data.name}
                </h1>
                <p className="text-black leading-[30px] text-justify">{data.description}</p>
              </div>
              <button
                className="text-white text-xl md:text-xl font-semibold p-3 md:px-6 md:py-4 mt-6 rounded hover:-translate-y-2 duration-300 cursor-pointer active:-translate-y-1 bg-blue-600"
                onClick={() => handleClick(data.id)}
              >
                {data.buttonText}
              </button>
            </div>
          </div>
        </>
      ) : (
        <Spinner></Spinner>
      )}
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Details;
