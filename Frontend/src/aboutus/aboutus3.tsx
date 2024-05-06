import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/common/SectionTitle";
import AboutItem from "@/components/home/components/AboutItem";

import about from "@/data/About";

const aboutUs3 = ({ id }: { id?: string }) => {
  return (
    <ResponsiveBox
      classNames="min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="p-4 py-16">
        <SectionTitle title="Company Profile">
          Our Details
        </SectionTitle>

        <GridBox classNames="justify-items-center sm:grid-cols-2 lg:grid-cols-3 mt-16">
          {about.map((service, index) => {
            return (
              <AboutItem
                key={`service-${index}`}
                data={service}
                index={index}
              />
            );
          })}
        </GridBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default aboutUs3;
