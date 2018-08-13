"use strict";

let SideColor = {
	BLACK: "black",
	WHITE: "white"
};

class Pawn {
	constructor(color, square) {
		if(color != SideColor.WHITE && color != SideColor.BLACK) {
			console.error("The color of the pawn is a wrong or a missing value, it will be automatically assigned to SideColor.WHITE");
			color = SideColor.WHITE;
		}

		this.color = color;
		this.square;
	}
	
	draw() {
		if(this.square == undefined) {
			console.error("The square of this pawn is undefined, it can't be drawn !");
			return;
		}

		stroke(20);
		strokeWeight(3);

		if(this.color == SideColor.BLACK)
			fill(20)
		else
			fill(255);
		circle(this.square.pos.x + this.square.scale/2, this.square.pos.y + this.square.scale/2, pawnRadius);
	}
}
