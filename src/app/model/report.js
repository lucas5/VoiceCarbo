export default class Report {
    constructor(date, total_carbohydrate, total_kcal, total_insulin, foods) {
        this.date = date;
        this.total_carbohydrate = total_carbohydrate;
        this.total_kcal = total_kcal;
        this.total_insulin = total_insulin;
        this.foods = foods;
    }
}