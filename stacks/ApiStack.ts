import { Api, StackContext, use } from "sst/constructs";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack }: StackContext) {
  const { table } = use(StorageStack);

  const api = new Api(stack, "sst-notes-api", {
    defaults: {
      function: {
        bind: [table]
      }
    },
    routes: {
      "POST /notes": "packages/functions/src/create.main"
    }
  });

  stack.addOutputs({
    ApiEndpoint: api.url
  });

  return {
    api
  };
}
