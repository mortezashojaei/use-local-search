![Farmers Market Finder Demo](https://miro.medium.com/max/960/1*lW-KSDU2SxGp3uQ65YsXlg.gif)



A custom React Hook to search locally in array.

## Install

`$ npm install use-local-search`

## Usage

``` 
import React from "react";
import useLocalSearh from "use-local-search";

const Example = ({ list }) => {
  const {
    searchText,                                            //value of search input
    setSearchText,                                        //handler of search input
    searchedList                                         //searched list (filtered by searchText value)
  } = useLocalSearch(list, listItem => listItem.name);  //search base on name of each item in list

  return (
    <>
      <input value={searchText} onChange={setSearchText} />
      <List value={searchedList} />
    </>
  );
};
```

## License

MIT
