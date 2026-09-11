"use client";

import { motion } from "framer-motion";
import { Restaurant } from "@/lib/types";
import { useState } from "react";

type SwipeCardProps = {
  restaurant: Restaurant;
  onSwipe: (direction: "left" | "right") => void;
  isTop: boolean;
  index: number;
};

export const SwipeCard = ({
  restaurant,
  onSwipe,
  isTop,
  index,
}: SwipeCardProps) => {
  const [exitX, setExitX] = useState(0);

  return (
    <motion.div
      exit={{ x: exitX, opacity: 0 }}
      style={{
        scale: 1 - index * 0.06,
        y: index * 20,
        zIndex: 3 - index,
      }}
      drag={isTop ? "x" : false}
      className="w-full max-w-xs rounded-2xl border border-neutral-800 overflow-hidden bg-neutral-900 absolute top-0 left-0"
      onDragEnd={(event, info) => {
        if (info.offset.x > 100) {
          setExitX(500);
          onSwipe("right");
        } else if (info.offset.x < -100) {
          setExitX(-500);
          onSwipe("left");
        } else {
          console.log("not far enough");
        }
      }}
      dragConstraints={{ left: 0, right: 0 }}
    >
      <img
        src={restaurant.imageUrl}
        alt={restaurant.name}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-medium">{restaurant.name}</h2>
        <p className="text-sm text-neutral-400">
          {restaurant.cuisine} · {restaurant.priceRange}
        </p>
      </div>
    </motion.div>
  );
};
