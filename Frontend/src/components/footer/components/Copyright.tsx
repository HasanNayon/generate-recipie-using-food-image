import Link from "next/link";
import Column from "@/components/core/Column";

const FooterCopyright = () => {
  return (
    <Column classNames="mt-8 justify-center items-center mx-auto">
      <p className="text-base/6 text-center mx-auto">
        Built with React, Next.js, Python Flask, TensorFlow, OpenCV.
      </p>
      <p className="text-sm/6 text-center mx-auto">
        Copyright © 2024{" "}
        <Link href="/" className="text-[var(--textColor)] hover:underline">
          Cooking By Sight
        </Link>
        . All Rights Reserved.
      </p>
    </Column>
  );
};

export default FooterCopyright;
