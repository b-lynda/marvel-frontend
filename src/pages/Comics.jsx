import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

  const formatString = (str) => {
    if (str.length < 10) {
      return str;
    } else {
      return str.slice(0, 10) + "...";
    }
  };

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my--marvel-backend--9gt8hqm44l5w.code.run/comics"
        );
        // console.log(response.data);
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
      <Header />
      <div className="sectionPerso">
        {data.results.map((result) => {
          return (
            <div key={result._id} className="personnage">
              <img
                src={result.thumbnail.path + "." + result.thumbnail.extension}
                alt="image personnage"
              />
              <p className="namePerso">{result.title}</p>
              {result.description ? (
                <p className="descPerso">{formatString(result.description)}</p>
              ) : (
                <p>pas de description</p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Comics;