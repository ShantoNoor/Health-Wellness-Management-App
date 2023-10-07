import { useNavigate } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { useEffect, useState } from "react";

const Home = () => {
  const data = useGetData();
  const navigate = useNavigate();

  console.log(data)


  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[200px] md:mt-[300px] gap-6 justify-items-center">
    //   {filteredData?.map((item) => (
    //     <div
    //       className="rounded-tl-lg rounded-tr-lg overflow-hidden hover:-translate-y-2 duration-300 cursor-pointer hover:shadow-lg active:-translate-y-1 active:shadow-md"
    //       key={item.id}
    //       onClick={() =>
    //         navigate(`/donation/${item.id}`, { state: { title: item.title } })
    //       }
    //     >
    //       <img src={item.picture} alt={`Picture of ${item.title}`} />
    //       <div
    //         style={{
    //           padding: "16px",
    //           backgroundColor: item.card_bg_color,
    //           borderBottomLeftRadius: "8px",
    //           borderBottomRightRadius: "8px",
    //         }}
    //       >
    //         <span
    //           style={{
    //             padding: "5px 10px",
    //             backgroundColor: item.category_bg_color,
    //             color: item.text_button_bg_color,
    //             borderRadius: "4px",
    //           }}
    //         >
    //           {item.category}
    //         </span>
    //         <h4 style={{ color: item.text_button_bg_color, marginTop: "8px" }}>
    //           {item.title}
    //         </h4>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <></>
  );
};

export default Home;
