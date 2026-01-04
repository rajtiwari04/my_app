"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Client = () => {
  const trpcClient = useTRPC();

  const { data: users } = useSuspenseQuery(
    trpcClient.getUsers.queryOptions()
  );

  return (
    <div>
      Client Component: {JSON.stringify(users)}
    </div>
  );
};
