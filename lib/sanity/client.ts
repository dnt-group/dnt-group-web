import { createClient, type QueryParams } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const isSanityConfigured = Boolean(projectId && dataset);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

type CacheOptions = {
  revalidate?: number | false;
  tags?: string[];
};

const DEFAULT_REVALIDATE = 86400; // 24 hours

export async function sanityFetch<T>(
  query: string,
  params: QueryParams = {},
  options: CacheOptions = {}
): Promise<T | null> {
  if (!sanityClient) return null;

  const { revalidate = DEFAULT_REVALIDATE, tags } = options;

  return sanityClient.fetch<T>(query, params, {
    next: {
      revalidate,
      ...(tags && { tags }),
    },
  });
}
