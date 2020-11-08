import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { fetchQuery } from "./fetch-query";

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
