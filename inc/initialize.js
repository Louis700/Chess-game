"use strict";

let canvas;

let scale;
let pawnRadius;

let white = new Color(234, 233, 210);
let black = new Color(75, 115, 153);
let selectColor = new Color(255, 255, 50, 0.625);

let board;

window.onload = init;

function init() {
	initCanvas();
	scale = canvas.width/8;

	pawnRadius = scale*5/16;

	board = new Board(new Vector(0, 0), scale);

	background(new Color(52));
	board.draw();

	canvas.addEventListener("click", clickListener);
	console.log("commit : avoid duplications in board.squaresToUpdate");
}

function initCanvas() {
	canvas = document.getElementById("gameCanvas");
	setTargetContext(canvas.getContext("2d"));

	if(window.innerHeight < window.innerWidth) {
		canvas.height = Math.floor(7*window.innerHeight/8);
		canvas.width = canvas.height;
	} else {
		canvas.width = Math.floor(7*window.innerWidth/8);
		canvas.height = canvas.width;
	}
}

function clickListener(evt) {
	let rect = evt.target.getBoundingClientRect();
	let pos = new Vector(evt.clientX - rect.left, evt.clientY - rect.top);

	board.click(pos)
}
