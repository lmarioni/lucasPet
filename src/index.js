import React, { Component } from "react";
import ReactDom from "react-dom";
import { App } from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Context  from './Context';

const client = new ApolloClient({
  uri: "https://lucasmarioni-petgram-server.now.sh/graphql"
});

ReactDom.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
