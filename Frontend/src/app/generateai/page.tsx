
import { Suspense } from "react";
import PageBox from "@/components/core/PageBox";
import dynamic from "next/dynamic";

const GenerateAi = dynamic(() => import("@/app/generateai"), { ssr: false });

function HomePage() {
  return (
    <div>
      <PageBox>
        <Suspense>
          <GenerateAi />
        </Suspense>
      </PageBox>
    </div>
  );
}

export default HomePage;
