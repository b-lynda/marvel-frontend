import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ComicPerso = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://my--marvel-backend--9gt8hqm44l5w.code.run/comics-perso/" + id
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <>
      <Header />
      <div className="container comicPersoPage">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </div>

      <div className="comicsPerso container">
        {data.comics.map((result) => {
          return (
            <div key={result._id}>
              <img
                src={result.thumbnail.path + "." + result.thumbnail.extension}
                alt="comic image"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ComicPerso;
