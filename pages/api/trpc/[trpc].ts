import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";

export const appRouter = trpc
  .router()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("pageTwo", {
    resolve() {
      return { message: "There will be blood tonight" };
    },
  })
  .mutation("multiply", {
    input: z.object({
      first: z.number(),
      second: z.number(),
    }),
    resolve({ input }) {
      return { product: input.first * input.second };
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
