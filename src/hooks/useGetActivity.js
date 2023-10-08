import { useState } from "react";
import getValueFromLocalStorage from "../utility/getValueFromLocalStorage";
import useGetData from "./useGetData";

const useGetActivity = () => {
  const localData = getValueFromLocalStorage("activity_list");
  const data = useGetData();
  const activity_list = [];
  for (const index of localData) {
    if (data[index - 1]) activity_list.push(data[index - 1]);
  }
  return activity_list;
};

export default useGetActivity;
