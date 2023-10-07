import { useEffect, useState } from "react";

const TopTenEvents = ({ data }) => {
  const [topTenData, setTopFiveData] = useState(data);
  useEffect(() => {
    const top = data.sort(() => Math.random() - 0.5).slice(0, 10);
    setTopFiveData(top);
  }, [data]);
  return (
    <>
      <ul className="menu rounded-box bg-white text-center">
        <li className="bg-transparent p-2 text-center text-blue-500 font-semibold text-xl">
         Top Ten Events
        </li>
        {topTenData.map((top, idx) => {
          return (
            <div key={idx}>
              <hr />
              <li className="bg-transparent p-2">
                <button>{top.name}</button>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default TopTenEvents;
