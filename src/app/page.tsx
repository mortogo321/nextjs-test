import ClickCounter from "@/components/ClickCounter";
import FruitList from "@/components/FruitList";
import AlertButton from "@/components/AlertButton";
import BlueBox from "@/components/BlueBox";
import PostsFetcher from "@/components/PostsFetcher";
import NameForm from "@/components/NameForm";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Next.js Demo Components
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        <ClickCounter />
        <FruitList />
        <AlertButton />
        <BlueBox />
        <PostsFetcher />
        <NameForm />
        <ProductGrid />
      </div>
    </div>
  );
}
