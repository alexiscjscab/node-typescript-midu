"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseComment = (commentRequest) => {
    if (!isString(commentRequest)) {
        throw new Error("Incorrect or missing comment");
    }
    return commentRequest;
};
const parseDate = (dateRequest) => {
    if (!isString(dateRequest) || !isDate(dateRequest)) {
        throw new Error("Incorrect or missing date");
    }
    return dateRequest;
};
const parseWeather = (weatherRequest) => {
    if (!isString(weatherRequest) || !isWeather(weatherRequest)) {
        throw new Error("Incorrect or missing weather");
    }
    return weatherRequest;
};
const parseVisibility = (visibilityRequest) => {
    if (!isString(visibilityRequest) || !isVisibility(visibilityRequest)) {
        throw new Error("Incorrect or missing visibility");
    }
    return visibilityRequest;
};
const isString = (string) => {
    return typeof string === 'string' || string instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (weather) => {
    return Object.values(types_1.Weather).includes(weather);
};
const isVisibility = (visibility) => {
    return Object.values(types_1.Visibility).includes(visibility);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
