import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";
import { FaCartArrowDown , FaSearch} from "react-icons/fa";



function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allApps, setAllApps] = useState([]);


  useEffect(() => {
    // Function to fetch data from MongoDB API
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/serching`);
        setAllApps(response.data); // Store all fetched apps
        setSearchResults(response.data); // Set search results initially to all fetched apps
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.searchTerm.value;
    setSearchTerm(value);

    // Perform search using regex pattern and filter the results
    const regex = new RegExp(value, "i");
    const filteredResults = allApps.filter((app) => {
      return Object.values(app).some((prop) => regex.test(prop));
    });

    setSearchResults(filteredResults);
  };

  return (
    <div>
      {/* handelSerching start */}
      <div className="flex flex-col justify-center items-center bg-[#0a073f] h-[200px]">
        <h1 className="md:text-3xl min-[540px]:text-xl max-[315px]:text-sm  text-center text-[#ece4e4] font-bold pb-9">
          Search the Name,Price,Type,Processor,Os,Memory
        </h1>
        <form onSubmit={handleSearch}>
          <div className="join">
            <input
              className="input input-bordered join-item min-[540px]:w-96 max-[450px]:w-[80%]"
              placeholder="Search..."
              name="searchTerm"
            />
            <button className="btn join-item rounded-r-full text-2xl"><FaSearch></FaSearch></button>
          </div>
        </form>
      </div>
      {/* handeserching End */}
      <div className="xl:w-[70%] lg:w-[80%] md:w-[90%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  max-[540px]:w-[80%] w-[60%] gap-4 mt-9">
        {searchResults.map((item, index) => (
          <div
            key={index}
            className="border border-t-4 rounded-md border-[#4e4ef4] shadow-lg "
          >
            {/* Displaying properties of each mobile app */}
            <div className="flex justify-center">
              <img className="h-[250px]" src={item.image} alt="" />
            </div>
            {/* <p className="text-xl font-bold"> Name :{item.name}</p> */}
            <div className="px-4 py-3">
              <div className="flex justify-between">
                <p className="text-xl font-bold"> Name : {item.name}</p>
                <p className="text-xl font-bold">${item.price}</p>
              </div>
              <div className="font-semibold">
                <p>Type : {item.type}</p>
                <p>Memory : {item.memory}</p>
                <p>Processor : {item.processor}</p>
                <p>Os : {item.os}</p>
              </div>
            </div>

            {/* Add other properties as needed */}
            <button className="rounded-md hover:bg-blue-500 flex justify-center items-center gap-2 w-full uppercase py-2 bg-blue-950 text-white">
            <FaCartArrowDown/> add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
