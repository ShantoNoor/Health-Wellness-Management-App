import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TopTenEvents = ({ data }) => {
  const navigate = useNavigate();
  const [topTenData, setTopFiveData] = useState(data);
  useEffect(() => {
    setTopFiveData(
      data
        .slice(0, data.length)
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)
    );
  }, [data]);
  
  return (
    <>
      <ul className="menu rounded-lg bg-white text-center">
        <li className="bg-transparent p-2 text-center text-blue-500 font-semibold text-xl">
          Top Ten Events
        </li>
        {topTenData.map((top, idx) => {
          return (
            <div key={idx}>
              <hr />
              <li className="bg-transparent p-2">
                <button
                  onClick={() =>
                    navigate("/details/" + top.id, {
                      state: { title: top.name },
                    })
                  }
                >
                  {top.name}
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default TopTenEvents;
