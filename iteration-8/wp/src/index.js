import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import './style.css';

import DisplayController from './DisplayController.ts';


const app = React.createElement("div", {
    className: "wrapper"
  }, React.createElement("div", {
    className: "form"
  }, React.createElement("label", {
    htmlFor: "username"
  }, "GitHub username"), React.createElement("input", {
    type: "text",
    id: "username",
    defaultValue: "toblinus"
  }), React.createElement("button", {
    id: "getter-btn",
    onClick: click
  }, "Get repos")), React.createElement("div", {
    className: "output",
    id: "display"
  }));


function createURL(username) {
    return `https://api.github.com/users/${username}/repos`;
}

function getRepos() {
    const name = document.getElementById('username').value;
    fetch(createURL(name))
        .then((val) => val.json())
        .then((answ) => {
            if (!Array.isArray(answ)) {
                display.printMsg(answ.message);
            }
            else {
                const reposList = answ.map(repo => repo.name);
                display.printList(reposList);
            }
        })
        .catch(console.log);
}

function click() {
    getRepos();
}

ReactDom.render(app, $("#root")[0]);
const display = new DisplayController(document.getElementById("display"));