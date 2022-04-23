import { NewDiaryEntry, Visibility, Weather } from "./types";

const parseComment = (commentRequest: any): string => {
  if (!isString(commentRequest)){
    throw new Error("Incorrect or missing comment"); 
  }

  return commentRequest
}

const parseDate = (dateRequest: any): string => {
  if (!isString(dateRequest) || !isDate(dateRequest)){
    throw new Error("Incorrect or missing date"); 
  }

  return dateRequest
}

const parseWeather = (weatherRequest: any): Weather => {
  if(!isString(weatherRequest) || !isWeather(weatherRequest)){
    throw new Error("Incorrect or missing weather");
  }

  return weatherRequest;
}

const parseVisibility = (visibilityRequest: any): Visibility => {
  if(!isString(visibilityRequest) || !isVisibility(visibilityRequest)){
    throw new Error("Incorrect or missing visibility");
  }
  return visibilityRequest;
}

const isString = (string: string | object): boolean => {
  return typeof string === 'string' || string instanceof String;
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
}

const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather);
}

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility);
}


const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry;
}

export default toNewDiaryEntry;