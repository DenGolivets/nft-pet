import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Info from "@/components/Info";
import Nfts from "@/components/Nfts";
import TopCreators from "@/components/TopCreators";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div>
      <Header />
      <Trending />
      <TopCreators />
      <Categories />
      <Nfts />
      <Banner />
      <Info />
      <Contact />
    </div>
  );
}
