import { GetProdutInspiration } from "./GetProdutInspiration";
import { TopRanking } from "./TopRanking";
import { Wellcome } from "./Wellcome";

export const Home = () => {
  return (
    <div className="mt-5">
      <div className="mx-5">
        <Wellcome />
        <TopRanking />
      </div>
      <GetProdutInspiration />
    </div>
  );
};
