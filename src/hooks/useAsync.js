import { useState, useEffect } from "react";

export const useAsync = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    asyncFunction()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, dependencies);

  return { data, isLoading, error };
};
