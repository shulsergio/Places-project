import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { fetchPlaces } from "./components/service/Api";
import Loader from "./components/Loader/Loader";

function App() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await fetchPlaces();
        console.log("data 1:");
        console.log(data);
        setPlaces(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Places project</h1>
      {loading && <Loader />}
      {error && <p>Error in app</p>}
      <div>
        {places.length > 0 &&
          places.map((item) => <p key={item.id}>{item.name}</p>)}
      </div>
    </>
  );
}

export default App;
