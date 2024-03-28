import { useState, useEffect } from 'react';

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true); // Set loading state when the request starts.
    setError(null); // Clear any previous errors.

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(responseJson => {
        setData(responseJson.data);
        setLoading(false); // Set loading state to false when the request is successful.
      })
      .catch(error => {
        setError(error); // Set the error state if there's an error.
        setLoading(false); // Set loading state to false when there's an error.
      });
  }, [url]);

  return { data, loading, error };
}