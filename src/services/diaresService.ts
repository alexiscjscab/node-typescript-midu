import { DiaryEntry, NewDiaryEntry, NoSensitiveInfoDiaryEntry } from "../types";
import diaryData from "./diares.json";

const diaires: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries = (): Array<DiaryEntry> => diaires;


export const getEntriesSensitiveInfo = (): Array<NoSensitiveInfoDiaryEntry> => {
  return diaires.map((entry) => ({
    id: entry.id,
    date: entry.date,
    weather: entry.weather,
    visibility: entry.visibility,
  }));
};

export const findById = (id: number): NoSensitiveInfoDiaryEntry | undefined => {
  const entry = diaires.find((entry) => entry.id === id);
  if (entry) {
    const { comment, ...rest } = entry;
    return rest
  }
  return undefined;
};

export const addEntry = ( newDiaryEntry : NewDiaryEntry) : DiaryEntry => {
  const newEntry: DiaryEntry = {
    id: Math.max(...diaires.map((entry) => entry.id)) + 1,
    ...newDiaryEntry
  };
  diaires.push(newEntry);
  return newEntry;
}

