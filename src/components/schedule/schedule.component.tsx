import React, { FC } from "react";
import { H1, H2, H3 } from "../typography";
import data from "./schedule.json";
import styled from "@emotion/styled";

interface Schedule {
  person: string;
  game: string;
  time: string;
  thumbnail: string;
}

interface ChartProps {
  schedules: Schedule[];
}

const formatTime = (time: string) => {
  const [hours] = time.split(":");
  if (parseInt(hours) > 12) {
    return `${parseInt(hours) - 12} PM`;
  }
  return `${hours} AM`;
};

export const Schedule: FC = () => {
  const { saturday, sunday } = data.schedules;

  return (
    <div className="row">
      <div className="col-12">
        <H1>Programa</H1>
      </div>
      <div className="col-12">
        <H2>Sábado</H2>
        <Chart schedules={saturday} />
      </div>
      <div className="col-12">
        <H2>Domingo</H2>
        <Chart schedules={sunday} />
      </div>
    </div>
  );
};

const StyledTable = styled.table`
  --bs-table-color: #6eba6c;
`;

const Chart: FC<ChartProps> = ({ schedules }) => {
  return (
    <StyledTable className="table table-borderless">
      <tbody>
        {schedules.map((schedule) => (
          <tr key={schedule.time}>
            <td>
              <H3>{formatTime(schedule.time)}</H3>
            </td>
            <td>
              <img src={schedule.thumbnail} alt={schedule.game} width={64} />
            </td>
            <td>{schedule.person}</td>
            <td>{schedule.game}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
