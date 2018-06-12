export default class Todo{
    public title: string;
    public isDone: boolean;
    public id: number;

    constructor(title : string, isDone : boolean){
        this.title = title;
        this.isDone = isDone;
    }
}