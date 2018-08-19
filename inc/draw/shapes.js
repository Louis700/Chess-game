"use strict";

let targetContext;

function setTargetContext(ctx) {
	targetContext = ctx;
}

function strokeWeight(weight, ctx=targetContext) {
	ctx.lineWidth = weight;
}

function border(color, ctx=targetContext) {
	noFill();
	stroke(color, ctx);
	rect(0, 0, ctx.canvas.width, ctx.canvas.height, ctx);
}

function circle(xCenter, yCenter, radius, ctx=targetContext) {
	arc(xCenter, yCenter, radius, 0, 2*Math.PI, false, ctx);
}

function arc(xCenter, yCenter, radius, startAngle, stopAngle, counterClockwise=false, ctx=targetContext) {
	ctx.beginPath();
	ctx.arc(xCenter, yCenter, radius, startAngle, stopAngle);
	ctx.closePath();
	drawShape(ctx);
}

function rect(xLeft, yTop, width, height, ctx=targetContext) {
	ctx.beginPath();
	ctx.rect(xLeft, yTop, width, height);
	ctx.closePath();
	drawShape(ctx);
}

function line(x1, y1, x2, y2, ctx=targetContext) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.closePath();
	drawShape(ctx);
}

