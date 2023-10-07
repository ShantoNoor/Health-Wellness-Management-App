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
        <div className="mt-20">
          <div className="rounded-lg overflow-hidden relative">
            <img
              className="w-full object-cover"
              src={data.picture3}
              alt={`Picture of ${data.title}`}
            />
            <div
              className="absolute bottom-0 p-5 md:p-9 w-full flex items-center"
              style={{ background: "rgba(11, 11, 11, 0.5)" }}
            >
              <button
                className="text-white text-xl md:text-xl font-semibold p-3 md:px-6 md:py-4 rounded hover:-translate-y-2 duration-300 cursor-pointer active:-translate-y-1"
                style={{
                  backgroundColor: data.text_button_bg_color,
                }}
                onClick={() => handleClick(data.id)}
              >
                Donate ${data.price}
              </button>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-black1 mt-14 mb-6">
            {data.title}
          </h1>
          <p className="text-black117 leading-[30px]">{data.description}</p>
        </div>
      ) : (
        <Spinner></Spinner>
      )}
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Details;
