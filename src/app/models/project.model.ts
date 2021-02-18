export class Project {
    id: Number;
    name: string;
    user_id: Number;

    constructor(_id: Number, _name: string) {
        this.id = _id;
        this.name = _name;
    }
}