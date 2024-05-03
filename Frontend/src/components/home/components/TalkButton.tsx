import Link from "next/link";

const TalkButton = () => {
  return (
    <Link href="/GenerateAiPage">
      <div className="app__filled_btn min-w-[12rem]">
        Generate Recipe!
      </div>
    </Link>
  );
};

export default TalkButton;
