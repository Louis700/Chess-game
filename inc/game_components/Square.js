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
		if(this.color == SideColor.BLACK)
			fill(black.r, black.g, black.b);
		else
			fill(white.r, white.g, white.b);

		rect(this.pos.x, this.pos.y, this.scale, this.scale);

		if(this.isSelected) 
			fill(selectColor.r, selectColor.g, selectColor.b, selectColor.a);

		if(this.isPossibleMove) {
			if(this.pawn == undefined)
				fill(0, 0, 255, 0.4);
			else
				fill(255, 0, 0, 0.4);
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

