#!/usr/bin/node

const login = prompt("Loin:")

alert((login === "сотрудник") ? "Привет!" : (login === "директор") ? "Здраствуйте" : (login === "") ? "нет логина" : "")