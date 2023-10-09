import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cards from "../components/Cards";
import useGetActivity from "../hooks/useGetActivity";

const Activity = () => {
  const navigate = useNavigate();
  const [showLength, setShowLength] = useState(4);
  const activity_list = useGetActivity();

  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      {activity_list.length > 0 ? (
        <div className="mt-6">
          <Cards data={activity_list} lg={4} disabled={true} len={8} />
        </div>
      ) : (
        <p className="mt-20 text-4xl lg:text-6xl font-extrabold text-center text-red1 max-w-[76%] mx-auto leading-[50px] lg:leading-[75px]">
          No Activity Found !
        </p>
      )}
    </div>
  );
};

export default Activity;
