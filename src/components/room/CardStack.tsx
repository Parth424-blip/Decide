"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { mockRestaurants } from "@/lib/mockData";
import { SwipeCard } from "./SwipeCard";
export const CardStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <SwipeCard
      restaurant={mockRestaurants[currentIndex]}
      onSwipe={(direction) => {
        setCurrentIndex(currentIndex + 1);
      }}
    />
  );
};
