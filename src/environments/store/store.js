import User from '../../app/model/user';

var USER = {};
var FOOD = [];
var TYPE_MEAL = '';
var MEAL = [];

class UserLogged {

    constructor(name, email, password, cpf) {
        this.user = new User(name, email, password, cpf);
    }

    getUser() {
        return this.user;
    }

    saveUser() {
        USER = this.user;
    }
}

class FoodRegistred {
    constructor(food) {
        this.food = food;
        FOOD = food
    }
}

class Store {
    saveUser(name, email, password, cpf) {
        USER = new User(name, email, password, cpf);
    }

    clearStore() {
        FOOD = [];
        TYPE_MEAL = '';
    }

    removeFood(fds) {
        FOOD = FOOD.filter((fd) => {
            if (fd.food.id !== fds.food.id)
                return fd
        })
    }

    saveMeal(meal, type_meal) {
        const ml = {
            type_meal: type_meal,
            meal: meal
        }
        MEAL = [...MEAL, ml];
    }

    getMeal() {
        return MEAL;
    }

    saveFood(food) {
        FOOD = [...FOOD, food];
    }

    saveTypeMeal(typeMeal) {
        TYPE_MEAL = typeMeal;
    }

    getUser() {
        return USER;
    }

    getFood() {
        return FOOD;
    }

    getTypeMeal() {
        return TYPE_MEAL;
    }
}

export { UserLogged, FoodRegistred, USER, FOOD, Store };