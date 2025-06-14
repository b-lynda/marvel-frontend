import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import ComicPerso from "./ComicPerso";
import { Link } from "react-router-dom";

  const formatString = (str) => {
    if (str.length < 40) {
      return str;
    } else {
      return str.slice(0, 40) + "...";
    }
  };

const Personnages = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my--marvel-backend--9gt8hqm44l5w.code.run/personnages"
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
            <Link key={result._id} to={`/comics-perso/${result._id}`} element={<ComicPerso />} className="personnage">
              <img
                src={result.thumbnail.path + "." + result.thumbnail.extension}
                alt="image personnage"
              />
              <p className="namePerso">{result.name}</p>
              {result.description ? (
                <p className="descPerso">{formatString(result.description)}</p>
              ) : (
                <p>pas de description</p>
              )}
             
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Personnages;
