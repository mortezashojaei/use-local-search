A custom React Hook to search locally in array.

## Install

`$ npm install use-local-search`

## Usage

``` 
const { searchText,//value of search input
setSearchText,//handler of search input
searchedList //searched list (filtered by searchText value)
} = useLocalSearch(list, listItem => listItem.name);//search base on name of each item in list

<input value={searchText} onChange={setSearchText} />
```

## License

MIT
