import User from '../../app/model/user';

var USER = {};
var FOOD = [];
var TYPE_MEAL = '';
var MEAL = [];
var DAY_MEAL = [];

class UserLogged {   
    saveUser(user) {
        USER = user;
    }

    getUser() {
        return USER;
    }
}

class Store {

    clearStore() {
        FOOD = [];
        TYPE_MEAL = '';
    }

    removeFood(fds) {
        FOOD = FOOD.filter((fd) => {
            if (fd.alimento.nome !== fds.alimento.nome)
                return fd
        })
    }

    saveMeal(meal, type_meal) {
        var count = 0;
        const date = new Date(Date.now());
        const dia = (date.getDate());
        for (var i = 0; i < meal.length; i++) {
            count = count + meal[i].carboidratos;
        }
        const ml = {
            type_meal: type_meal,
            meal: meal,
            totalDeCarboidratos: count,
            data: dia
        }
        console.log(ml)
        MEAL = ml;
    }

    verificaRefeicaoDiaria() {
        const date = new Date(Date.now());
        const dia = (date.getDate());
        if (DAY_MEAL.length > 0) {
            if (DAY_MEAL[0].data != dia) {
                DAY_MEAL = []
            }
        }
    }

    saveDayMeal(meal) {
        this.verificaRefeicaoDiaria();
        DAY_MEAL = [...DAY_MEAL, meal];
    }

    getDayMeal() {
        return DAY_MEAL;
    }

    getMeal() {
        return MEAL;
    }

    // Salva alimento cadastrado na tela de registrar alimento
    saveFood(food) {
        FOOD = [...FOOD, food];
    }

    saveTypeMeal(typeMeal) {
        TYPE_MEAL = typeMeal;
    }

    getFood() {
        return FOOD;
    }

    getTypeMeal() {
        return TYPE_MEAL;
    }
}

export { UserLogged, USER, FOOD, Store };