import Link from "next/link";
import Column from "@/components/core/Column";

const FooterContactInfo = () => {
  return (
    <Column classNames="w-full justify-between gap-8 mt-8 md:flex-row md:items-center">
      <Column classNames="md:items-center">
        <p className="text-sm/6 font-semibold text-center text-[var(--secondaryColor)]">
          Address
        </p>

        <p className="text-base/6 mt-2">Zhengzhou University</p>
        <p className="text-base/6 mt-2">School of Computer and Artificial Intelligence</p>
      </Column>

      <Column classNames="md:items-center">
        <p className="text-sm/6 font-semibold text-center text-[var(--secondaryColor)]">
          Contact Us
        </p>

        <p className="text-base/6 mt-2">
          <Link
            href="mailto:mohammadhamim@stu.zzu.edu.cn"
            target="_blank"
            className="text-[var(--textColor)] hover:underline"
          >
            mohammadhamim@stu.zzu.edu.cn
          </Link>
        </p>

        <p className="text-base/6 mt-2">
          <Link
            href="mailto:mdraziulhasannayon@stu.zzu.edu.cn"
            target="_blank"
            className="text-[var(--textColor)] hover:underline"
          >
            mdraziulhasannayon@stu.zzu.edu.cn
          </Link>
        </p>

        <p className="text-base/6 mt-2">
          <Link
            href="mailto:nishatbinmdharun@stu.zzu.edu.cn"
            target="_blank"
            className="text-[var(--textColor)] hover:underline"
          >
            nishatbinmdharun@stu.zzu.edu.cn
          </Link>
        </p>

        
      </Column>

      <Column classNames="md:items-center">
        <p className="text-sm/6 font-semibold text-center text-[var(--secondaryColor)]">
          Members
        </p>

        <Column classNames="md:items-center mt-2">
          <p className="text-base/6 text-center">
            Mohammad Hamim (202280090114)
          </p>
          <p className="text-base/6 text-center">
            Md Raziul Hasan Nayon (202280090122)
          </p>
          <p className="text-base/6 text-center">
            Nishat Bin Md Harun Tamim (202280090123)
          </p>
        </Column>
      </Column>
    </Column>
  );
};

export default FooterContactInfo;
