import { fetchApi, unwrapAtributes } from "./strapi";
import { getToken } from "./auth";

const getArtworks = async () => {
  const artworks = await fetchApi({ endpoint: "artworks", wrappedByKey: "data" });
  if (!artworks) return [];
  return artworks.map(unwrapAtributes);
};

const getArtwork = async (id) => {
  const artwork = await fetchApi({ endpoint: `artworks/${id}`, wrappedByKey: "data"});
  return unwrapAtributes(artwork);
};

const createArtwork = async (data) => {
    try {
      const artwork = await fetchApi(
        {
          endpoint: "artworks",
        },
        {
          method: "POST",
          body: JSON.stringify({ data }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );
      return unwrapAtributes(artwork);
    } catch (error) {
      console.error("Error creating artwork:", error);
      // Handle error gracefully, perhaps by returning null or throwing a custom error
      throw error;
    }
  };

  export async function deleteArtwork(id) {
    const artwork = await fetchApi(
      { endpoint: `artworks/${id}` },
      { method: "DELETE" }
    );
    if (artwork.error) throw new Error(artwork.error);
    return true;
  }

  const getArtworkById = async (id) => {
    const artwork = await fetchApi({
      endpoint: `artworks/${id}`,
      query: { populate: ["owner"] },
      wrappedByKey: "data",
    });
    return unwrapAtributes(artwork);
  };

export { getArtworks, getArtwork, createArtwork, getArtworkById}