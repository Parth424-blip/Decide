"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { mockRestaurants } from "@/lib/mockData";
import { SwipeCard } from "./SwipeCard";

export const CardStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = mockRestaurants.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative h-[500px] max-w-xs w-full mx-auto">
      <AnimatePresence>
        {visibleCards.map((restaurant, index) => (
          <SwipeCard
            key={restaurant.id}
            restaurant={restaurant}
            isTop={index === 0}
            index={index}
            onSwipe={(direction) => {
              setCurrentIndex(currentIndex + 1);
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
