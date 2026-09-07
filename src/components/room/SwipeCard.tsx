"use client";

import { motion } from "framer-motion";
import { Restaurant } from "@/libs/types";

type SwipeCardProps = {
  restaurant: Restaurant;
};

export const SwipeCard = ({ restaurant }: SwipeCardProps) => {
  return (
    <motion.div
      drag="x"
      className="w-full max-w-xs rounded-2xl border border-neutral-800 overflow-hidden bg-neutral-900"
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
