import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <div>
        {data.results.map((result, index) => {
          return (
            <div key={result._id}>
                <img src={result.thumbnail.path} alt="image personnage" />
              <p>{result.name}</p>
              <p>{result.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Personnages;
