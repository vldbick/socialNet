import React from "react";
import s from './Messages.module.css';
import Dialogs from "./dialogs/Dialogs";
import { Route, Router, Routes, Switch } from "react-router-dom";

export default function Messages({mess}) {
    return (
        <div>
            <Dialogs mess={mess}></Dialogs>
        </div>
    )
}