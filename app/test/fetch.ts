import { cacheLife, cacheTag } from "next/cache";

// Cached function with tag
export const getDataWithTag = async () => {
  "use cache: remote";
  cacheTag("data-tag");
  cacheLife("days");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    message: "Cached data with tag",
    timestamp: new Date().toISOString(),
    random: Math.random(),
  };
};

// Cached function without tag
export const getDataWithoutTag = async () => {
  "use cache: remote";
  cacheTag("data-without-tag");
  cacheLife("days");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    message: "Cached data without tag",
    timestamp: new Date().toISOString(),
    random: Math.random(),
  };
};
