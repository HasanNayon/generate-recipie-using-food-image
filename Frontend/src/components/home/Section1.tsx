import Balancer from "react-wrap-balancer";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import TalkButton from "./components/TalkButton";
import AnimatedElement from "./components/AnimatedElement";

const HomeSection1 = ({ id }: Readonly<{ id?: string }>) => {
  return (
    <ResponsiveBox
      classNames="gradient_bg min-h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)] items-center justify-center relative"
      id={id}
    >
      <ConstraintedBox classNames="px-4 py-8 z-[5]">
        <GridBox classNames="!gap-16 w-full !grid-cols-1 lg:!grid-cols-2">
          <Column classNames="w-full !justify-center items-center lg:items-start">
            <p className="text-4xl/tight md:text-5xl/tight xl:text-6xl/tight font-bold text-[var(--whiteColor)] drop_in text-center lg:text-start">
              <Balancer>
                Generate Recipe From Food Images
              </Balancer>
            </p>

            <p className="text-base/normal md:text-lg/normal xl:text-xl/normal font-normal mt-8 drop_in text-center lg:text-start">
              <Balancer>
              In todays fast-paced world, cooking can be both an enjoyable hobby and a necessity. However, 
              sometimes finding the right recipe for a dish can be challenging, especially when you dont know 
              the name of the dish or its ingredients. Cooking by Sight aims to solve this problem by allowing 
              users to simply take a picture of the food they want to cook and generate a recipe based on that image.
              </Balancer>
            </p>

            <Column classNames="gap-4 mt-8 lg:mt-16 lg:flex-row">
              <TalkButton />
            </Column>
          </Column>

          <AnimatedElement />
        </GridBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
