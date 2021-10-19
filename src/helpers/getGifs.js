export const getGifs = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categoria
  )}&limit=10&api_key=zAhU2O2Jyws5NRfwLqf3emRSZLCEWvrA`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return { id: img.id, title: img.title, url: img.images?.original.url };
  });
  return gifs;
};
