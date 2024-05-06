"use client";

import { useRouter } from "next/navigation";
import { TeamType, type ITeamItem } from "@/types";
import { Balancer } from "react-wrap-balancer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import CardBox from "@/components/core/CardBox";

const TeamItem = ({ team }: { team: ITeamItem }) => {
  const router = useRouter();

  const _handleNavigateToPage = (id: string) => {
    if (!id || id.length < 1) return;

    // router.push(`/teams?id=${id}`);
  };

  return (
    <CardBox
      classNames="min-w-[calc(100%-2rem)] sm:min-w-[25rem] md:min-w-[28rem] aspect-[3/5] max-h-[30rem] p-4 gap-8 items-center justify-between bg-[var(--textColor10)] group slide_in cursor-pointer"
      onClick={() => _handleNavigateToPage(team.id)}
    >
      <Column classNames="w-full items-center justify-start">
        <Row classNames="w-[2.5rem] md:w-[3rem] aspect-square items-center justify-center">
          <Image
            src={team.icon}
            alt={`team-${team.title}`}
            width={100}
            height={100}
            sizes="100%"
            loading="lazy"
            placeholder="blur"
            blurDataURL={team.icon}
            className="w-full h-full object-cover aspect-square"
          />
        </Row>

        <p className="text-lg/6 font-semibold mt-4">{team.title}</p>

        <div
          className={`flex flex-row items-center justify-center rounded-full py-[0.05] px-[0.5rem] mt-4 capitalize text-center border ${
            team.TeamType === TeamType.Active
              ? "text-[var(--errorColor)] border-[var(--errorColor50)]"
              : "text-[var(--successColor)] border-[var(--successColor50)]"
          }`}
        >
            
          <p className="text-xs/6 font-semibold">
            {team.TeamType === TeamType.Chilling ? "Actice" : "Chilling"}
          </p>
        </div>

        <Row classNames="w-full items-center justify-center mt-4 gap-2">
          {team.githubUrl ? (
            <Link
              href={team.githubUrl}
              aria-label={`${team.title} GitHub URL`}
              target="_blank"
              className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-base/6 text-[var(--textColor)]"
              />
            </Link>
          ) : null}

          {team.url ? (
            <Link
              href={team.url}
              aria-label={`${team.title} team URL`}
              target="_blank"
              className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
            >
              <FontAwesomeIcon
                icon={faEye}
                className="text-base/6 text-[var(--textColor)]"
              />
            </Link>
          ) : null}
        </Row>
      </Column>

      <Column classNames="w-full items-center">
        <p className="text-center text-base/6">
          <Balancer>{team.description}</Balancer>
        </p>

        {team.tags && team.tags.length > 0 ? (
          <Row classNames="w-full items-center justify-center flex-wrap mt-4">
            {team.tags.map((tag, i) => {
              return (
                <p
                  key={`tag-${i}`}
                  className="rounded-[var(--borderRadius)] border border-[var(--textColor50)] py-[.125rem] px-2 mr-2 mb-2 text-xs/6 font-normal"
                >
                  {tag}
                </p>
              );
            })}
          </Row>
        ) : null}
      </Column>
    </CardBox>
  );
};

export default TeamItem;
