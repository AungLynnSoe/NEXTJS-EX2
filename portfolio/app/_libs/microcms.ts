import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type skill = {
  name: string;
  text: string;

  image: MicroCMSImage;
} & MicroCMSListContent;
 if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
  }

  if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
  }

  const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  });
    export const getskillsList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<skill>({
      endpoint: "skill",
      queries,
    });

    return listData;
  };
