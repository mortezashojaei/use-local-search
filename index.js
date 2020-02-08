import { useState } from "react";

export const useLocalSearch = (list, callBack = item => item) => {
  const [searchText, setSearchText ] = usState("");
  const searchedList =
    searchText.length > 0
      ? list.filter(item => String(callBack(item)).includes(searchText))
      : list;

  return {searchText, setSearchText, searchedList};
};
