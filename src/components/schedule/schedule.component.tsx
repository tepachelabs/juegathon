import React, { FC } from "react";
import { H1, H2, TextBody } from "../typography";
import {
  Entry,
  EntryAvatar,
  EntryData,
  EntryThumbnail,
} from "./schedule.styles";

interface Schedule {
  person: string;
  game: string;
  time: string;
  thumbnail: string;
  avatar: string;
}

interface ScheduleProps {
  className?: string;
  saturday: Schedule[];
  sunday: Schedule[];
}

interface ChartProps {
  schedules: Schedule[];
}

const formatTime = (time: string) => {
  const [hours] = time.split(":");
  const hour = parseInt(hours, 10);

  if (hour === 12) {
    return "12 PM";
  }

  if (hour === 0) {
    return "12 AM";
  }

  if (hour > 12) {
    return `${hour - 12} PM`;
  }

  return `${hour} AM`;
};

export const Schedule: FC<ScheduleProps> = ({ className, saturday, sunday }) => {
  return (
    <div className={`row ${className}`}>
      <div className="col-12">
        <H1>Programa</H1>
      </div>
      <div className="col-12 my-4">
        <H2>Sábado</H2>
        <Chart schedules={saturday} />
      </div>
      <div className="col-12 my-4">
        <H2>Domingo</H2>
        <Chart schedules={sunday} />
      </div>
    </div>
  );
};

const Chart: FC<ChartProps> = ({ schedules }) => {
  return (
    <section className="row">
      {schedules.map((schedule) => (
        <Entry key={schedule.time} className="col-lg-6 d-flex my-2">
          <EntryData className="d-flex lh-sm justify-content-center flex-column">
            <TextBody className="text-nowrap" noMargin condensed darker>
              {schedule.game}
            </TextBody>
            <TextBody noMargin condensed darker>
              {formatTime(schedule.time)}
            </TextBody>
            <TextBody className="text-nowrap" noMargin condensed darker>
              {schedule.person}
            </TextBody>
          </EntryData>
          <EntryThumbnail src={schedule.thumbnail} />
          <EntryAvatar src={schedule.avatar} />
        </Entry>
      ))}
    </section>
  );
};
