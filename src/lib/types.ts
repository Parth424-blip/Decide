export type Restaurant = {
  id: string;
  name: string;
  imageUrl: string;
  cuisine: string;
  priceRange: string;
};

export type Room = {
  code: string;
  participantCount: number;
  items: Restaurant[];
};
