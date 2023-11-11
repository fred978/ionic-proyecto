import { Cards } from "../entities/cards";
import { CardsRepository } from "../interfaces/cards.repository";
import { Injectable } from "@angular/core";


export @Injectable({providedIn: 'root'})

class GetCardsUseCase {

    constructor (private repository: CardsRepository) {}

    async execute (idList:string) : Promise<Cards[]> {

        try {
           
            const cards = await this.repository.getCard(idList)
      
            
            if (cards) {
                return cards
            } else {
            
              throw new Error("No se escontraron tarjetas")
            }
        } catch (error) {
           
            console.error("Error al obtener tarjetas:", error)
            throw error 
        }
    }
}