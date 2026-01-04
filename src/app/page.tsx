import prisma from "@/lib/db";
import { caller } from "@/trpc/server";
import { Client } from "./client";
import { getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { trpc } from "@/trpc/server";
import { Suspense } from "react";
const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="flex items-center justify-center min-h-screen">
     <HydrationBoundary state ={dehydrate(queryClient) }>
      <Suspense fallback={<p>Loading Client Component...</p>}>
         <Client /> 
         </Suspense>
     </HydrationBoundary> 
    </div>
  );
};

export default Page;
