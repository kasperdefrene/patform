import { redirect } from "react-router-dom";
import { deleteArtwork } from "../services/artwork";

const DeletePage = async ({ params }) => {
  await deleteArtwork(params.id); 
  return redirect("/");
};

export default DeletePage;