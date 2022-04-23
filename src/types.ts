/* export type Weather =
  | "sunny"
  | "rainy"
  | "cloudy"
  | "snowy"
  | "thunderstorm"
  | "foggy"
  | "windy"
  | "hail";
*/
//export type Visibility = "great" | "good" | "ok" | "poor";

export enum Visibility {
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}

export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Snowy = "snowy",
  Thunderstorm = "thunderstorm",
  Foggy = "foggy",
  Windy = "windy",
  Hail = "hail",
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, "id">;

//export type NoSensitiveInfoDiaryEntry = Pick<DiaryEntry, "id" | "date" | "weather" | "visibility">;

// otra forma

export type NoSensitiveInfoDiaryEntry = Omit<DiaryEntry, "comment">;
