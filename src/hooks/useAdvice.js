import { useState, useEffect } from "react";

const API = "https://api.adviceslip.com/advice";

export function useAdvice() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAdvice = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(API);
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data);
      setAdvice(data.slip.advice);
      setId(data.slip.id);
    } catch (error) {
      console.error(error);
      setError("Could not load advice. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return { advice, id, loading, error, fetchAdvice };
}
