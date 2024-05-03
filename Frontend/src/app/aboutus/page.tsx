import React from "react";
import { Suspense } from "react";
import PageBox from "@/components/core/PageBox";
import aboutUs from "../../aboutus/aboutus";
import aboutUs2 from "@/aboutus/aboutus2";
import aboutUs3 from "@/aboutus/aboutus3";
import aboutUs4 from "@/aboutus/aboutus4";
import aboutUs5 from "@/aboutus/aboutus5";

const aboutus = ({ id }: Readonly<{ id?: string }>) => {
    return (
        <PageBox>
            <Suspense>
                {aboutUs({ id })}
                {aboutUs2({ id })} 
                {aboutUs3({ id })} 
                {aboutUs4({ id })} 
                {aboutUs5({ id })} 
            </Suspense>
        </PageBox>
    );
};

export default aboutus;
