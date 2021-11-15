export class Quiz{
    constructor(public id: number,
     public question: string, 
     //public opt1: string,
      //public opt2: string,
       //public opt3: string,
        //public opt4: string,
         public answer: number,
          public opt: string[],
          public selectedId?: number,
          public result?: boolean
    ){
    }
    
}