import { useState, useEffect } from 'react';
// import ResultList from './ResultList';

// Import our search method
import search from '../assets/utils/API';

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const searchGithub = async (query) => {
    const { data } = await search(query);
    setResults(data.data);
    console.log("xxxxxxxxxxxxxxxxxxx"+results) //data.data is required to access the data
  };

  // We want to run this method when the component first loads so that we have images of kittens to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => {
    searchGithub('anthogr45');
  }, []);

  return (
    <div>
      <h2>GitHub Repositories</h2>
      <ul className="list-group">
        {results.map((result) => (
          <li className="list-group-item" key={result.id}>
            <a href={result.html_url}>{result.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultContainer;

// import { useState, useEffect } from 'react';
// import ResultList from './ResultList';
// import search from '../utils/API';

// const SearchResultContainer = () => {
//   const [results, setResults] = useState([]);

//   const searchGiphy = async (query) => {
//     const { data } = await search(query);
//     setResults(data.data);
//   };

//   useEffect(() => {
//     searchGiphy('anthogr45');
//   }, []);

//   return (
//     <div>
//       <ResultList results={results} />
//     </div>
//   );
// };

// export default SearchResultContainer;