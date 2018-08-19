"use strict";

let Side = {
	BLACK: "black",
	WHITE: "white"
};

class Pawn {
	constructor(side, square) {
		if(side != Side.WHITE && side != Side.BLACK) {
			error("The color of the pawn is a wrong or a missing value, it will be automatically assigned to Side.WHITE");
			side = Side.WHITE;
		}

		this.side = side;
		this.square;
	}
	
	draw() {
		if(this.square == undefined) {
			return error("The square of this pawn is undefined, it can't be drawn !");
		}

		stroke(20);
		strokeWeight(3);

		if(this.side == Side.BLACK)
			fill(new Color(20));
		else
			fill(new Color(255));
		circle(this.square.pos.x + this.square.scale/2, this.square.pos.y + this.square.scale/2, pawnRadius);
	}
}
