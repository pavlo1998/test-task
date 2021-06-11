export class Photo{
    src: string | undefined;
    name: string | undefined;
    textDecor: string | undefined;
    id: number;


    constructor(src: string | undefined, name: string | undefined,textDecor: string | undefined, id: number){
        this.src = src;
        this.name = name;
        this.textDecor = '';
        this.id = id;  
    }
}