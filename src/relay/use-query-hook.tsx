import React from "react";
import { GraphQLTaggedNode } from "react-relay";
import { QueryOptions, useQuery } from "relay-hooks";
import { OperationType } from "relay-runtime";

export const useQueryHook = <TOperationType extends OperationType>(
  gqlQuery: GraphQLTaggedNode,
  variables?: TOperationType["variables"],
  options?: QueryOptions
) => {
  const { props, error, retry } = useQuery<TOperationType>(
    gqlQuery,
    variables,
    {
      fetchPolicy: options?.fetchPolicy,
      skip: options?.skip,
      networkCacheConfig: options?.networkCacheConfig,
      fetchObserver: options?.fetchObserver,
    }
  );
  const [err, setErr] = React.useState<string | null>(null);
  const [data, setData] = React.useState<TOperationType["response"] | null>(
    null
  );
  const [loading, setLoading] = React.useState(!options?.skip);

  React.useEffect(() => {
    if (error) {
      setErr(error.message);
      setLoading(false);
    }
    if (props) {
      setData(props);
      setLoading(false);
    }
  }, [props, error]);
  return { err, data, loading, retry };
};
