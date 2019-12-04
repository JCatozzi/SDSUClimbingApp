import React from "react";
import { environment } from "../environment";

// assessments
function createNews(news_data) {
  console.log("news: ", news_data);
  console.log(`posting to http://18.216.54.110/api/news/create-news`);
  fetch(`http://18.216.54.110/api/news/create-news`, {
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

function test() {
  console.log("test");
  fetch(`http://18.216.54.110/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
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
