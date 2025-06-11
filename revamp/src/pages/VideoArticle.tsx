import { useParams } from "react-router-dom";

export default function VideoArticle() {
  const { id } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Video Article #{id}</h1>
      <p>This is the content for Video Article with ID: {id}</p>
    </div>
  );
}
