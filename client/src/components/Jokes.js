import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
const Jokes = () => {
  const [jokes, setjokes] = useState([]);
  const getjokes = async () => {
    const response = await axios.get("/api/jokes");
    if (response.data.success) {
      setjokes(response.data.data);
    }
  };

  useEffect(() => {
    getjokes();
  }, []);

  return (
    <>
      
      {jokes.map((candidate, i) => {
        return (
          <>
            <Card
              category={candidate.category}
              headline={candidate.headline}
              description={candidate.description}
              current={i}
            />
          </>
        );
      })}
    </>
  );
};
export default Jokes;