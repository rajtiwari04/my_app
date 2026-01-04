import { z } from 'zod';
import { baseProcedure, createTRPCRouter} from '../init';
import prisma from '@/lib/db'
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
   getUsers: baseProcedure.query(async () => {
    return await prisma.user.findMany();
  }),
});
export type AppRouter = typeof appRouter;