import { CardStack } from "@/components/room/CardStack";

export default function RoomPage({ params }: { params: { code: string } }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <CardStack />
    </main>
  );
}
