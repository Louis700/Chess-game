"use strict";

class Square {
	constructor(pos, scale, color, pawn=undefined) {
		this.pos = pos;
		this.scale = scale;
		this.color = color
		this.isPossibleMove = false;
		this.isSelected = false;

		if(pawn != undefined)
			this.setPawn(pawn);
	}

	draw() {
		this.drawBackground();

		if(this.pawn != undefined)
			this.pawn.draw(this.pos + pawnRadius, this.pos + pawnRadius);
	}

	drawBackground() {
		noStroke();

		if(this.isSelected)
			fill(selectColor);
		else if(this.color == Side.BLACK)
			fill(black);
		else
			fill(white);

		rect(this.pos.x, this.pos.y, this.scale, this.scale);

		if(this.isPossibleMove) {
			fill(new Color(10, 10, 10, 0.4));
			circle(this.pos.x + this.scale/2, this.pos.y + this.scale/2, this.scale/5);
		}
	}

	select() {
		this.isSelected = true;
	}

	deselect() {
		this.isSelected = false;
	}

	setIsPossibleMove(isPossibleMove) {
		this.isPossibleMove = isPossibleMove;
	}

	setPawn(pawn) {
		if(pawn == undefined) {
			console.error("pawn is undefined !");
			return;
		}

		this.pawn = pawn;
		pawn.square = this;
	}
}

