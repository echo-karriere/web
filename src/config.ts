export const isBrowser = typeof window !== "undefined";

export const isDev =
  process.env.NODE_ENV === "development" ||
  (isBrowser && window.location.origin != "https://www.echokarriere.no/");
