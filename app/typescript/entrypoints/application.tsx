import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
const csrfToken = document
  .querySelector("meta[name=csrf-token]")
  .getAttribute("content");
const client = new ApolloClient({
  link: new HttpLink({
    credentials: "same-origin",
    headers: {
      "X-CSRF-Token": csrfToken,
    },
  }),
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
