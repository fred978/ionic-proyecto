import { Lists } from "../entities/lists";
import { ListsRepository } from "../interfaces/lists.repository";
import { Injectable } from "@angular/core";


export @Injectable({providedIn: 'root'})

class GetListsUseCase {

    constructor (private repository : ListsRepository) {}

    async execute () : Promise<Lists[]> {

        try {
          
            const lists = await this.repository.getLists()
      
          
            if (lists) {
                return lists
            } else {
             
              throw new Error("No se escontraron listas")
            }
        } catch (error) {
           
            console.error("Error al obtener listas:", error)
            throw error 
        }
    }
}