import express from "express";
import ejs from "ejs";

const app = express();

const d = new Date();
const day = d.getDay();

export default function getDay(day) {
    if(day === 0) {
        return "weekend"
    } else if(day === 1) {
        return "weekday"
    } else if(day === 2) {
        return "weekday" 
    } else if(day === 3) {
        return "weekday" 
    } else if(day === 4) {
        return "weekday" 
    } else if(day === 5) {
        return "weekday" 
    } else {
        return "weekend"
    }
}

console.log(getDay(day));