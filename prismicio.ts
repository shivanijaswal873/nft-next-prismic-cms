import * as prismic from "@prismicio/client";

export const repositoryName = "nft-next";

export function createClient() {
  const client = prismic.createClient(repositoryName, {
    fetchOptions: { next: { revalidate: 5 } },
  });

  return client;
}