import { useEffect, useState } from "react";

const useGetData = (id = 0) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((jsonData) => {
        if (id === 0) {
          setData(jsonData);
        } else {
          setData([jsonData?.find((item) => item.id === id)]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return data;
};

export default useGetData;
