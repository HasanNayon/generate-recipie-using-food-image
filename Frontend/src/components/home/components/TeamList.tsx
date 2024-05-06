"use client";

import { createRef } from "react";
import { ITeamItem } from "@/types";
import Row from "@/components/core/Row";
import TeamItem from "./TeamItem";
import Column from "@/components/core/Column";

const TeamList = ({ team }: Readonly<{ team: ITeamItem[] }>) => {
  const carouselRef = createRef<HTMLDivElement>();

  return (
    <Column classNames="w-full mt-16">
      <Row
        classNames="w-full gap-4 overflow-x-auto no-scrollbar"
        elementRef={carouselRef}
      >
        {team.map((item, index) => {
          return <TeamItem key={`project-item-${index}`} team={item} />;
        })}
      </Row>
    </Column>
  );
};

export default TeamList;
