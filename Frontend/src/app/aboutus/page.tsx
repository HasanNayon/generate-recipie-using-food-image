import React from "react";
import aboutUs from "../aboutus";
import { Suspense } from "react";
import PageBox from "@/components/core/PageBox";

const aboutus = ({ id }: Readonly<{ id?: string }>) => {
    return (
        <PageBox>
            <Suspense>
                {aboutUs({ id })} {/* Pass the id to the aboutUs component */}
            </Suspense>
        </PageBox>
    );
};

export default aboutus;
