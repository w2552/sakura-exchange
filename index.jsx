import React from "react";
import { DarkModeNo } from "./DarkModeNo";
import { SwipeHandle } from "./SwipeHandle";
import "./style.css";

export const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="div">
        <DarkModeNo className="dark-mode-NO" />
        <div className="group">
          <div className="z-coins">Z COINS</div>

          <div className="group-2" />
        </div>

        <p className="india-s-highly-rated">
          India&#39;s Highly Rated Cryptocurrency Exchange
        </p>

        <SwipeHandle className="swipe-handle-instance" />
      </div>
    </div>
  );
};
