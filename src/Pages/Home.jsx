import { useState } from "react";
import { AppDownload } from "../Components/AppDownload";
import { FoodDisplay } from "../Components/FoodDisplay";
import { Header } from "../Components/Header";
import { MenuCart } from "../Components/MenuCart";

export const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <MenuCart category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};
