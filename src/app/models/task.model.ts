export class Task {
    id: Number;
    name: string;
    estimatedHours: Number;
    project_id: Number;
    task_type_id: Number;
    workedHours: Number;
    remainingHours: Number;

    constructor(_id: Number, _name: string, _estimate: Number) {
        this.name = _name;
        this.id = _id;
        this.estimatedHours = _estimate;
    }
}