import axios from "axios";

export const fetchPlaces = async () => {
  const URL = "https://places-project-db.onrender.com/places/cities";

  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.error("Err fetch-", error);
  }
};
