import { Injectable } from "@angular/core";
import { Boards } from "src/app/core/trello/entities/boards";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BoardsRepository } from "src/app/core/trello/interfaces/boards.repository";

@Injectable({providedIn: 'root'})

export class BoardsStorageService implements BoardsRepository{

    urlTrello = "https://api.trello.com/1/boards/"

    httpHeader = {
        headers: new HttpHeaders({ "Accept": "application/json" }),
    }

    constructor(public http: HttpClient){}

    createBoard(boards: Boards): Promise<boolean> {
        
        const httpParams = new HttpParams()
            .set("name", boards.name)
            .set("key", boards.key)
            .set("token", boards.token)
    
        return this.http.post(this.urlTrello, httpParams, this.httpHeader)
            .toPromise()
            .then(() => {
                console.log("confirm");
                return true;
            })
            .catch((error) => {
                console.log(error);
                return false;
            });
        
    }

    getBoard(): Promise<string> {
        const httpParams = new HttpParams()
            .set("key", "ea08207aa06325d1abe38048a6515daa")
            .set("token", "ATTA7c4383492d9ea77df4eae8b49ac6c2836e49606638f9baa9288b2e153ff26b6b244082F1")
    
        return this.http.get<any>(this.urlTrello + "bL2p4dfO", { params: httpParams, headers: { "Accept": "application/json" }})
            .toPromise()
            .then((response) => {
                const idBoard = response.id
                return idBoard
            })
            .catch((error) => {
                return error
            });
    }
    

    updateBoard(id: string, updatedBoards: Boards): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    deleteBoard(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}