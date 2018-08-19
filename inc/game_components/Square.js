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
		if(this.color == Side.BLACK)
			fill(black);
		else
			fill(white);

		rect(this.pos.x, this.pos.y, this.scale, this.scale);

		if(this.isSelected) 
			fill(selectColor);

		if(this.isPossibleMove) {
			if(this.pawn == undefined)
				fill( new Color(0, 0, 255, 0.4) );
			else
				fill( new Color(255, 0, 0, 0.4) );
		}
		rect(this.pos.x, this.pos.y, this.scale, this.scale);
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

