"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { mockRestaurants } from "@/lib/mockData";
import { SwipeCard } from "./SwipeCard";

export const CardStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = mockRestaurants.slice(currentIndex, currentIndex + 3);

  return (
    <div>
      <p>{visibleCards.length}</p>
      {visibleCards.map((restaurant, index) => (
        <SwipeCard
          key={restaurant.id}
          restaurant={restaurant}
          isTop={index === 0}
          onSwipe={(direction) => {
            setCurrentIndex(currentIndex + 1);
          }}
        />
      ))}
    </div>
  );
};
