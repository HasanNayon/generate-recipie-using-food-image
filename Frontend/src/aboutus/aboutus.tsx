import Balancer from "react-wrap-balancer";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import bannerElement from "@/components/home/components/BannerElement";

const aboutUs = ({ id }: Readonly<{ id?: string }>) => {
  return (
    <ResponsiveBox
      classNames="gradient_bg min-h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)] items-center justify-center relative"
      id={id}
    >
      {/* about */}
      <ConstraintedBox classNames="px-4 py-8 z-[5]">
        <GridBox classNames="!gap-16 w-full !grid-cols-1 lg:!grid-cols-2 flex justify-center items-center">
          <Column classNames="w-full flex justify-center lg:items-start">
            <p className="text-4xl/tight md:text-5xl/tight xl:text-6xl/tight font-bold text-[var(--whiteColor)] drop_in text-center lg:text-start">
              <Balancer>About Cooking By Sight</Balancer>
            </p>

            <p className="text-base/normal md:text-lg/normal xl:text-xl/normal font-normal mt-8 drop_in text-center lg:text-start">
              <Balancer>
                Welcome to Cooking by Sight, where innovation meets culinary
                expertise. We are a team passionate about revolutionizing the
                way you experience cooking. Our platform harnesses the power of
                artificial intelligence to transform food images into delicious
                recipes, seamlessly bridging the gap between visual inspiration
                and practical cooking guidance.
              </Balancer>
            </p>
          </Column>
          {/* <bannerElement /> */}
        </GridBox>
      </ConstraintedBox>
    </ResponsiveBox>

    
  );
};

export default aboutUs;
