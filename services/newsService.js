import React from "react";
import { environment } from "../environment";

// assessments
function createNews(news_data) {
  fetch(`http://142.93.207.122/api/news/create-news`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      news_data
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
  createNews,
  test
};
