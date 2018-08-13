"use strict";

class Board {
	constructor(pos, scale) {
		this.pos = pos;
		this.scale = scale;
		this.pawns = [];
		this.squares = [];

		this.initSquares();
	}

	initSquares() {
		for(let j = 0; j < 8; j++) {
		for(let i = 0; i < 8; i++) {
				let squareColor;
				let squareIndex = i + j*8;	

				if( (i + j)%2 == 0)
					squareColor = SideColor.WHITE;
				else
					squareColor = SideColor.BLACK;

				let pawn = undefined;

				if(squareIndex < 24 && squareColor == SideColor.BLACK) {
					pawn = new Pawn(SideColor.BLACK);
					this.pawns.push(pawn);
				} else if(squareIndex >= 40 && squareColor == SideColor.WHITE) {
					pawn = new Pawn(SideColor.WHITE);
					this.pawns.push(pawn);
				}
				this.squares.push(new Square({ x: (this.pos.x + i*this.scale), y: (this.pos.y + j*this.scale) }, this.scale, squareColor, pawn));
			}
		}
	}

	addPawn(pawn) {
		this.pawns.push(pawn);
	}

	draw() {
		for(let square of this.squares)
			square.draw();
	}
}
