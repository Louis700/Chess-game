"use strict";

class Square {
	constructor(pos, scale, color, pawn=undefined, isSelected=false) {
		this.pos = pos;
		this.scale = scale;
		this.color = color
		this.isSelected = isSelected;

		if(pawn != undefined)
			this.setPawn(pawn);
	}

	draw() {
		if(this.color == SideColor.BLACK)
			fill(black.r, black.g, black.b);
		else
			fill(white.r, white.g, white.b);

		noStroke();
		rect(this.pos.x, this.pos.y, this.scale, this.scale);
		
		if(this.isSelected) {
			fill(selectColor.r, selectColor.g, selectColor.b, selectColor.a);
			rect(this.pos.x, this.pos.y, this.scale, this.scale);
		}

		if(this.pawn != undefined)
			this.pawn.draw(this.pos + pawnRadius, this.pos + pawnRadius);
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

