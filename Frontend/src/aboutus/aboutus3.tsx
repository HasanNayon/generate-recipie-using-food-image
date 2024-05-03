import Balancer from "react-wrap-balancer";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import cbs from "../app/cbs";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      cbs: any;
    }
  }
}

const aboutUs3 = ({ id }: Readonly<{ id?: string }>) => {
  return (
    <ResponsiveBox
      classNames="gradient_bg min-h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)] items-center justify-center relative"
      id={id}
    >
      {/* how it works */}
      <ConstraintedBox classNames="px-4 py-8 z-[5]">
        <GridBox classNames="!gap-16 w-full !grid-cols-1 lg:!grid-cols-2 flex justify-center items-center">
          <Column classNames="w-full flex justify-center lg:items-start">
            <p className="text-4xl/tight md:text-5xl/tight xl:text-6xl/tight font-bold text-[var(--whiteColor)] drop_in text-center lg:text-start">
              <Balancer>How It Works</Balancer>
            </p>

            <p className="text-base/normal md:text-lg/normal xl:text-xl/normal font-normal mt-8 drop_in text-center lg:text-start">
              <Balancer>
              Our AI platform utilizes cutting-edge algorithms and machine learning techniques to analyze food images and extract key ingredients and cooking methods. 
              Through our intuitive interface, users can simply snap a photo of their ingredients, and within moments, receive personalized recipes tailored to their 
              preferences and dietary requirements.
              </Balancer>
            </p>
          </Column>
          <cbs />
        </GridBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default aboutUs3;
