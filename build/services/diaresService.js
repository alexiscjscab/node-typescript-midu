"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.findById = exports.getEntriesSensitiveInfo = exports.getEntries = void 0;
const diares_json_1 = __importDefault(require("./diares.json"));
const diaires = diares_json_1.default;
const getEntries = () => diaires;
exports.getEntries = getEntries;
const getEntriesSensitiveInfo = () => {
    return diaires.map((entry) => ({
        id: entry.id,
        date: entry.date,
        weather: entry.weather,
        visibility: entry.visibility,
    }));
};
exports.getEntriesSensitiveInfo = getEntriesSensitiveInfo;
const findById = (id) => {
    const entry = diaires.find((entry) => entry.id === id);
    if (entry) {
        const { comment } = entry, rest = __rest(entry, ["comment"]);
        return rest;
    }
    return undefined;
};
exports.findById = findById;
const addEntry = (newDiaryEntry) => {
    const newEntry = Object.assign({ id: Math.max(...diaires.map((entry) => entry.id)) + 1 }, newDiaryEntry);
    diaires.push(newEntry);
    return newEntry;
};
exports.addEntry = addEntry;
