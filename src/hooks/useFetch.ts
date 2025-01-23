import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    fetch(url, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        // Causing incorrect error because of React's Strict Mode
        // Source: https://stackoverflow.com/a/74008242
        if (controller.signal.aborted) return;
        setError(error);
      });

    return function () {
      controller.abort();
    };
  }, []);

  return { data, loading, error };
}
