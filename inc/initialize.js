"use strict";

let canvas;

let scale;
let pawnRadius;

let white = {r: 234, g: 233, b: 210};
let black = {r: 75, g: 115, b: 153};
let selectColor = {r: 255, g: 255, b:50, a: 0.625};

let board;

window.onload = init;

function init() {
	initCanvas();

	scale = canvas.width/8;
	pawnRadius = scale*5/16;

	board = new Board({x: 0, y: 0}, scale);

	background(52, 52, 52);
	board.draw();

	canvas.addEventListener("click", clickListener);
}

function initCanvas() {
	canvas = document.getElementById("gameCanvas");
	setTargetContext(canvas.getContext("2d"));

	canvas.height = Math.floor(7*window.innerHeight/8);
	canvas.width = canvas.height;
}

function clickListener(evt) {
	let rect = evt.target.getBoundingClientRect();
	let pos = {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
	board.click(pos)
}
