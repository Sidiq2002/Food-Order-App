import { assets } from "../assets/assets.js";
import "../Style/appdownload.css";
export const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br />
        Fooddy App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="play_store" />
        <img src={assets.app_store} alt="app_store" />
      </div>
    </div>
  );
};
