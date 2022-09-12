import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const News = () => {
  const [news, setnews] = useState([]);

  const getnews = async () => {
    const response = await axios.get("/api/news");
    if (response.data.success) {
      setnews(response.data.data);
    }
  };
  useEffect(() => {
    getnews();
  }, []);
  return (
    <>
      {news.map((candidate, i) => {
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

export default News;
