import { useState } from "react";
import { AppDownload } from "../Components/AppDownload";
import { Exploremenu } from "../Components/Exploremenu";
import { FoodDisplay } from "../Components/FoodDisplay";
import { Header } from "../Components/Header";

export const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};
