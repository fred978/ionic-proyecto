import { BoardsRepository } from "../interfaces/boards.repository";
import { Injectable } from "@angular/core";


export @Injectable({providedIn: 'root'})

class GetBoardUseCase {

    constructor (private repository : BoardsRepository) {}

    async execute () : Promise<string> {

        try {
           
            const idBoard = await this.repository.getBoard()
      
            
            if (idBoard) {
                return idBoard
            } else {
            
              throw new Error("No se escontraron tableros")
            }
        } catch (error) {
            throw new Error("No se escontraron tableros") 
        }
    }
}