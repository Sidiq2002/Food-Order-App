import { useState } from "react";
import { AppDownload } from "../Components/AppDownload";
import { FoodDisplay } from "../Components/FoodDisplay";
import { Header } from "../Components/Header";
import { ExploreMenu } from "../Components/Exploremenu";

export const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};
