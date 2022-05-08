import React from 'react';
import ReactDOM from "react-dom";
import Toast from './Toast';

export default function notification(
    good: boolean,
    title: string,
    message: string
) {
    removeElementBody();
    let t = (
        <Toast
        title={title}
        message={message}
            type={good ? `success` : `danger`}
        />
    );
    addElementBody(t);
}

const addElementBody = (e: any) => {
    createElementToAdd("output");
    ReactDOM.render(e, document.getElementById("output"));
};

const createElementToAdd = (idC: string) => {
    if (document.querySelector("#" + idC)) return;
    let d = document.createElement("div");
    d.id = idC;
    return document.body.append(d);
};

const removeElementBody = () => {
    window.onbeforeunload = function () {
      return null;
    };
    document.getElementById("output")?.remove();
};

export const removeToastBody = () => {
    document.getElementById("output_2")?.remove();
};
