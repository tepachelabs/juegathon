import {Theme} from "@emotion/react";
import {theme2024} from "../themes/theme-2024";
import data2024 from "./schedule-2024.json";
import {theme2023} from "../themes/theme-2023";
import data2023 from "./schedule-2023.json";
import {theme2022} from "../themes/theme-2022";
import data2022 from "./schedule-2022.json";

interface ScheduleRecord {
  person: string
  game: string
  time: string
  thumbnail: string
  avatar: string
}

interface Schedule {
  saturday: ScheduleRecord[]
  sunday: ScheduleRecord[]
}

interface Data {
  theme: Theme;
  data: {
    schedules: Schedule
  }
}

const yearData: Record<number, Data> = {
  2024: {
    theme: theme2024,
    data: data2024,
  },
  2023: {
    theme: theme2023,
    data: data2023,
  },
  2022: {
    theme: theme2022,
    data: data2022,
  },
}

export const getYearTheme = (year?: number) => {
  return year ? yearData[year].theme : theme2024
}

export const getYearData = (year?: number) => {
  return year ? yearData[year].data : data2024
}
