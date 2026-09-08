"use client";

import { motion } from "framer-motion";
import { Restaurant } from "@/lib/types";

type SwipeCardProps = {
  restaurant: Restaurant;
  onSwipe: (direction: "left" | "right") => void;
};

export const SwipeCard = ({ restaurant, onSwipe }: SwipeCardProps) => {
  return (
    <motion.div
      drag="x"
      className="w-full max-w-xs rounded-2xl border border-neutral-800 overflow-hidden bg-neutral-900"
      onDragEnd={(event, info) => {
        if (info.offset.x > 100) {
          onSwipe("right");
        } else if (info.offset.x < -100) {
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
