import { useState } from "react";
import axios from "axios";

const useGetById = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDataById = async (id) => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://restaurant-api.dicoding.dev/detail/${id}`
      );

      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, getDataById };
};

export default useGetById;
