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

const aboutUs2 = ({ id }: Readonly<{ id?: string }>) => {
  return (
    <ResponsiveBox
      classNames="gradient_bg min-h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)] items-center justify-center relative"
      id={id}
    >
      {/* mission */}
      <ConstraintedBox classNames="px-4 py-8 z-[5]">
        <GridBox classNames="!gap-16 w-full !grid-cols-1 lg:!grid-cols-2 flex justify-center items-center lg:justify-end">
          {" "}
          <Column classNames="w-full flex justify-center lg:items-start">
            <p className="text-4xl/tight md:text-5xl/tight xl:text-6xl/tight font-bold text-[var(--whiteColor)] drop_in text-center lg:text-end">
              {" "}
              <Balancer>Our Mission</Balancer>
            </p>

            <p className="text-base/normal md:text-lg/normal xl:text-xl/normal font-normal mt-8 drop_in text-center lg:text-end">
              {" "}
              <Balancer>
              At Cooking by Sight, our mission is to empower home cooks, food enthusiasts, and professionals alike to explore the world of 
              cooking with confidence and creativity. We believe that everyone should have access to simple yet extraordinary culinary experiences, 
              regardless of their expertise level or dietary preferences.
              </Balancer>
            </p>
          </Column>
        </GridBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default aboutUs2;
