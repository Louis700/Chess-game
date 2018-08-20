"use strict";

class Board {
	constructor(pos, scale) {
		this.pos = pos;
		this.scale = scale;
		this.pawns = [];
		this.squares = [];
		this.squaresToUpdate = []
		this.possibleMoves = [];
		this.selectedSquare = undefined;

		this.initSquares();
	}

	initSquares() {
		for(let j = 0; j < 8; j++) {
			for(let i = 0; i < 8; i++) {
				let squareColor;
				let squareIndex = i + j*8;	

				if( (i + j)%2 == 0)
					squareColor = Side.WHITE;
				else
					squareColor = Side.BLACK;

				let pawn = undefined;

				if(squareColor == Side.BLACK) {
					if(squareIndex < 24) {
						pawn = new Pawn(Side.BLACK);
						this.pawns.push(pawn);
					} else if(squareIndex >= 40) {
						pawn = new Pawn(Side.WHITE);
						this.pawns.push(pawn);
					}
				}
				this.squares.push(new Square(new Vector(this.pos.x + i*this.scale, this.pos.y + j*this.scale),
											 this.scale, squareColor, pawn));
				this.squaresToUpdate.push(this.squares[this.squares.length - 1]);
			}
		}
	}

	click(pos) {
		let squarePos = new Vector( Math.floor(pos.x/this.scale),
					    Math.floor(pos.y/this.scale) );
		let squareIndex = squarePos.x + 8*squarePos.y;

		this.removePossibleMoves();
		this.selectSquare(squareIndex);

		if(this.selectedSquare.pawn != undefined)
			this.determinePossibleMoves(squarePos);

		this.draw();
	}
	
	determinePossibleMoves(squarePos) {
		let squareIndex = squarePos.x + 8*squarePos.y;
		
		if(this.squares[squareIndex - 9] != undefined && this.squares[squareIndex - 9].pawn == undefined && squarePos.x > 0)
			this.addPossibleMove(this.squares[squareIndex - 9]);
	
		if(this.squares[squareIndex - 7] != undefined && this.squares[squareIndex - 7].pawn == undefined && squarePos.x < 7)
			this.addPossibleMove(this.squares[squareIndex - 7]);

	}

	addPossibleMove(square) {
		square.setIsPossibleMove(true);
		this.possibleMoves.push(square);
		this.squaresToUpdate.push(square);
	}

	removePossibleMoves() {
		for(let square of this.possibleMoves) {
			square.setIsPossibleMove(false);
			this.squaresToUpdate.push(square);
		}
	}

	selectSquare(index) {
		this.deselectSquare();
		this.squares[index].select();
		this.selectedSquare = this.squares[index];
		this.squaresToUpdate.push(this.selectedSquare);
	}

	deselectSquare() {
		if(this.selectedSquare != undefined) {
			this.selectedSquare.deselect();
			this.squaresToUpdate.push(this.selectedSquare);
			this.selectedSquare = undefined;
		}
	}

	addPawn(pawn) {
		this.pawns.push(pawn);
	}

	draw() {
		for(let square of this.squaresToUpdate)
			square.draw();

		this.squaresToUpdate = [];
	}
}
