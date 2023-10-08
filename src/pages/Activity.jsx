import { useNavigate } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import getValueFromLocalStorage from "../utility/getValueFromLocalStorage";
import { useState } from "react";
import Cards from "../components/Cards";

const Activity = () => {
  const localData = getValueFromLocalStorage("activity_list");
  const data = useGetData();
  const activity_list = data.filter((item) => localData.includes(item.id));
  const navigate = useNavigate();
  const [showLength, setShowLength] = useState(4);

  return activity_list.length > 0 ? (
    <div className="mt-6">
      <Cards data={activity_list} lg={4} disabled={true} len={8} />
    </div>
  ) : (
    <p className="mt-20 text-4xl lg:text-6xl font-extrabold text-center text-red1 max-w-[76%] mx-auto leading-[50px] lg:leading-[75px]">
      No Activity Found !
    </p>
  );
};

export default Activity;
