import generateAi from "@/app/generateai";
import { Suspense } from "react";
import PageBox from "@/components/core/PageBox";


const GenerateAiPage = () => {
      return (
          <PageBox>
            <Suspense>
            <h1>Generate AI Page</h1>
            {generateAi()}
            </Suspense>
          </PageBox>
  );
};
export default GenerateAiPage;
