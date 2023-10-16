import React from "react";
import s from './Messages.module.css';
import Dialogs from "./dialogs/Dialogs";
import { Route, Router, Routes, Switch } from "react-router-dom";

export default function Messages(props) {
    return (
        <div>
            <Dialogs></Dialogs>
        </div>
    )
}