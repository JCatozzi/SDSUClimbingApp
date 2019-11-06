import React from "react";
import { environment } from "../environment";

// assessments
function createNews(news_data) {
  console.log("news: ", news_data);
  console.log(`posting to https://18.216.54.110:5000/api/news/create-news`);
  fetch(`https://18.216.54.110:5000/api/news/create-news`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      news: news_data
    })
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log("response: ", responseJson);
    })
    .catch(error => {
      console.error(error);
    });
}

module.exports = {
  createNews
};
