export const isDev =
  process.env.NODE_ENV === "development" ||
  window.location.origin != "https://www.echokarriere.no/";
