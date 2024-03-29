"use client"

import * as React from "react";
import './Trending.css';
import CardGroup from "../CardGroup/CardGroup";
import TrendingMore from "../TrendingMore/TrendingMore";
import TrendingVideo  from "../TrendingVideo/TrendingVideo";
import ShopNow from "../ShopNow/ShopNow";
import InvisibleBox from "../InvisibleBox/InvisibleBox";
import { InvisibleCarousel } from "../InvisibleCarousel/InvisibleCarousel";
import InvisibleCard from "../InvicibleCard/InvicibleCard";
import TrendingContainer from "../TrendingContainer/TrendingContainer";


export function Trending() {
  return (
    <div className="trending-con">
      < TrendingContainer />
      < CardGroup />
      < TrendingMore />
      < TrendingVideo />
      < ShopNow />
      < InvisibleBox />
      < InvisibleCarousel />
      < InvisibleCard />
    </div>
  );
}

