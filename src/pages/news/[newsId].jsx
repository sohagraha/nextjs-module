import { useRouter } from "next/router";

const SingleNews = () => {
  const router = useRouter();
  return (
    <div>
      <h1>The News Detail Page</h1>
      <p>{router.query.newsId}</p>
    </div>
  );
};

export default SingleNews;
