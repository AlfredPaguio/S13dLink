async function addHTTPS(url: string): Promise<string> {
  if (URL.canParse(url)) return url;
  let newUrl;
  try {
    newUrl = new URL(url);
    if (newUrl.protocol === "http:" || newUrl.protocol === "https:") {
      return url;
    }
  } catch (error) {
    console.error("[Server] " + error);
    return "https://" + url;
  }
  return url;
}

export default addHTTPS;
