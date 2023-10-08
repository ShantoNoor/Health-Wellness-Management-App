import { useNavigate } from "react-router-dom";
import useGetActivity from "../hooks/useGetActivity";

const RecentActivity = () => {
  const navigate = useNavigate();
  const activity_list = useGetActivity();

  return (
    <ul className="menu rounded-lg bg-white text-center">
      <li className="bg-transparent p-2 text-center text-blue-500 font-semibold text-xl">
        {activity_list?.length !== 0
          ? "Recent Three Activities"
          : "No Activity Found !"}
      </li>
      {activity_list?.reverse().slice(0, 3).map((recent, idx) => {
        return (
          <div key={idx}>
            <hr />
            <li className="bg-transparent p-2">
              <button
                onClick={() =>
                  navigate("/details/" + recent.id, {
                    state: { title: recent.name },
                  })
                }
              >
                {recent.name}
              </button>
            </li>
          </div>
        );
      })}
    </ul>
  );
}

export default RecentActivity