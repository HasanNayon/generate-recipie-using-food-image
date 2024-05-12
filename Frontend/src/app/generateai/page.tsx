// import generateAi from "@/app/generateai";
import { Suspense } from "react";
import PageBox from "@/components/core/PageBox";

// const GenerateAiPage = () => {
//       return (
//           <PageBox>
//             <Suspense>
//             <h1>Generate AI Page</h1>
//             {generateAi()}
//             </Suspense>
//           </PageBox>
//   );
// };
// export default GenerateAiPage;
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
