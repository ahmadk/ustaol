import { Component, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-plan-management',
  templateUrl: './my-plan-management.component.html',
  styleUrls: ['./my-plan-management.component.scss']
})
export class MyPlanManagementComponent implements OnInit {

  constructor() {
  }


  faClock = faClock;
  selectedMeals = [];
  meals = [
    {
      image: '../../assets/images/menu-items/menu1.png',
      title: 'Golden Stake',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      type: {
        name: 'Meat',
        icon: '../../assets/icons/meat-gray.svg',
      },
      preparationPeriod: '30 min',
    },
    {
      image: '../../assets/images/menu-items/menu1.png',
      title: 'Spicy Ginger Chicken Tacos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      type: {
        name: 'Chicken',
        icon: '../../assets/icons/chicken-gray.svg',
      },
      preparationPeriod: '20 min',
    },
    {
      image: '../../assets/images/menu-items/menu1.png',
      title: 'Spicy Ginger Chicken Tacos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      type: {
        name: 'Meat',
        icon: '../../assets/icons/meat-gray.svg',
      },
      preparationPeriod: '20 min',
    },
    {
      image: '../../assets/images/menu-items/menu1.png',
      title: 'Spicy Ginger Chicken Tacos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      type: {
        name: 'Chicken',
        icon: '../../assets/icons/chicken-gray.svg',
      },
      preparationPeriod: '20 min',
    },
    {
      image: '../../assets/images/menu-items/menu1.png',
      title: 'Spicy Ginger Chicken Tacos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      type: {
        name: 'Meat',
        icon: '../../assets/icons/meat-gray.svg',
      },
      preparationPeriod: '20 min',
    },
    {
      image: '../../assets/images/menu-items/menu1.png',
      title: 'Spicy Ginger Chicken Tacos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
      type: {
        name: 'Chicken',
        icon: '../../assets/icons/chicken-gray.svg',
      },
      preparationPeriod: '20 min',
    },
  ];

  ngOnInit() {
  }

  selectMeal(meal) {
    const selectedMealsLength = this.selectedMeals.length;
    const selectedMeals = this.selectedMeals;
    if (selectedMealsLength < 3) {
      if (selectedMealsLength === 0) {
        selectedMeals.push(meal);
      } else {
        selectedMeals.forEach((selectedMeal, index) => {
          if (selectedMeal === meal) {
            selectedMeals.splice(index, 1);
          } else {
            selectedMeals.push(meal);
          }
        });
      }
    } else {
      // todo: please use snackbar or some toast library instead of this cheesy alert.
      alert(' You cannot select more than 3');
    }
    this.selectedMeals = selectedMeals;
  }


  checkIfMealIsSelected(meal): boolean {
    let isFound = false;
    this.selectedMeals.forEach((selectedMeal, index) => {
      if (selectedMeal === meal) {
        isFound = true;
      }
    });
    return isFound;
  }
}

