import { useRouter } from "next/router";

const CatchAllRoutes = () => {
  const router = useRouter();
  console.log(JSON.stringify(router.query));
  return <div></div>;
};

export default CatchAllRoutes;
