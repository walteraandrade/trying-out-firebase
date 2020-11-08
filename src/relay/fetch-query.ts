import { Variables } from "react-relay";
import { GraphQLResponse, ObservableFromValue } from "relay-runtime";

export const GRAPHQL_URL = "https://eletric-goat.hasura.app/v1/graphql";

const headers = {
  Accept: "application/json",
  "Content-type": "application/json",
};

// Define a function that fetches the results of a request (query/mutation/etc)
// and returns its results as a Promise:
export const fetchQuery = (
  operation: any,
  variables: Variables
): ObservableFromValue<GraphQLResponse> => {
  const body = JSON.stringify({
    query: operation.text, // GraphQL text from input
    variables,
  });

  const response = fetch(GRAPHQL_URL, {
    method: "POST",
    headers,
    body,
  }).then((res) => res.json());

  return response;
};
