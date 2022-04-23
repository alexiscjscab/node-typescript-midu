"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = exports.Visibility = void 0;
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
})(Visibility = exports.Visibility || (exports.Visibility = {}));
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Snowy"] = "snowy";
    Weather["Thunderstorm"] = "thunderstorm";
    Weather["Foggy"] = "foggy";
    Weather["Windy"] = "windy";
    Weather["Hail"] = "hail";
})(Weather = exports.Weather || (exports.Weather = {}));
