import { Suspense } from "react";
import PageBox from "@/components/core/PageBox";
import HomeSection1 from "@/components/home/Section1";
import HomeSection2 from "@/components/home/Section2";
import HomeSection3 from "@/components/home/Section3";
import HomeSection6 from "@/components/home/Section6";

const Home = () => {
  return (
    <PageBox>
      <Suspense>
        <HomeSection1 id="home" />
        <HomeSection2 id="services" />
        <HomeSection3 id="projects" />
        <HomeSection6 id="contact" />
      </Suspense>
    </PageBox>
  );
};

export default Home;
