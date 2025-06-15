import axios from "axios";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my--marvel-backend--9gt8hqm44l5w.code.run/personnages"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });
  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <>
      <div>
        <input
          type="text"
          placeholder="Recherche"
          value={value}
          onChange={handleChange}
        />
      </div>
      {/* Je souhaitais faire un composant recherche auto-completion que j'utiliserai dans le Header
      mais j'ai eu une erreur d'afficher en me disant 
      que includes n'étais pas une fonction donc ça fonctionnait pas, le code c'était ça : 

      <ul>
        {data.results.filter((result) => 
          result.includes(value))
          .map((result) => <li>{result.name}</li>)
        }
      </ul> */}
    </>
  );
};

export default SearchBar;
