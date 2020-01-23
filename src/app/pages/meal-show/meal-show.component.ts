import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {faClock} from '@fortawesome/free-regular-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

type ingredientItemType = { category: string; title: string; url: string; alt: string }[];
type ingredientColumnTowItemsType = { category: string; title: string; url: string; alt: string }[];
type instructionsType = { paragraph: string; title: string; url: string; alt: string; number: string; }[];

@Component({
  selector: 'app-meal-show',
  templateUrl: './meal-show.component.html',
  styleUrls: ['./meal-show.component.scss']
})
export class MealShowComponent implements OnInit {
  private checkboxGroupForm: FormGroup;
  public ingredientItems: ingredientItemType = [{
    title: 'Ground Beef',
    category: '1 Unit',
    url: '../../assets/images/ingredients/ingredient-1.png',
    alt: '',
  }, {
    title: 'Ground Beef',
    category: '1 Unit',
    url: '../../assets/images/ingredients/ingredient-2.png',
    alt: '',
  }, {
    title: 'Ground Beef',
    category: '1 Unit',
    url: '../../assets/images/ingredients/ingredient-3.png',
    alt: '',
  }, {
    title: 'Ground Beef',
    category: '1 Unit',
    url: '../../assets/images/ingredients/ingredient-4.png',
    alt: '',
  }, {
    title: 'Ground Beef',
    category: '1 Unit',
    url: '../../assets/images/ingredients/ingredient-5.png',
    alt: '',
  }];
  public ingredientColumnTowItems: ingredientColumnTowItemsType = [{
    url: '../../assets/images/ingredients/ingredient-6.png',
    alt: '',
    title: 'Ground Beef',
    category: '1 Unit',
  }, {
    title: 'Ground Beef',
    category: '1 Unit',
    url: '../../assets/images/ingredients/ingredient-7.png',
    alt: '',
  }, {
    title: 'Ground Beef',
    category: '1 Unit',
    url: '../../assets/images/ingredients/ingredient-8.png',
    alt: '',
  }, {
    title: 'Ground Beef',
    category: '1 Unit',
    url: '../../assets/images/ingredients/ingredient-9.png',
    alt: '',
  }, {
    title: 'Ground Beef',
    category: '1 Unit',
    url: '../../assets/images/ingredients/ingredient-10.png',
    alt: '',
  }];
  public instructions: instructionsType = [{
    url: '../../../assets/images/instructions/instructions-1.png',
    alt: '',
    number: '1',
    title: 'Prepare & roast the potatoes:',
    paragraph: 'Lorem ipsum dolor sit amet, <span class="text-primary">consetetur sadipscing elitr,</span> sed diam nonumy\n' +
      '                                           eirmod tempor invidunt ut\n' +
      '                                           labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n' +
      '                                           accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n' +
      '                                           takimata sanctus…',

  }, {
    url: '../../../assets/images/instructions/instructions-2.png',
    alt: '',
    number: '2',
    title: 'Prepare the remaining ingredients:',
    paragraph: 'Lorem ipsum dolor sit amet, <span class="text-primary">consetetur sadipscing elitr,</span> sed diam nonumy\n' +
      '                                           eirmod tempor invidunt ut\n' +
      '                                           labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n' +
      '                                           accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n' +
      '                                           takimata sanctus…',
  }, {
    url: '../../../assets/images/instructions/instructions-3.png',
    alt: '',
    number: '3',
    title: 'Prepare the remaining ingredients:',
    paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n' +
      '                                           eirmod tempor invidunt ut\n' +
      '                                           labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n' +
      '                                           accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n' +
      '                                           takimata sanctus…',
  }, {
    url: '../../../assets/images/instructions/instructions-4.png',
    alt: '',
    number: '4',
    title: 'Prepare & roast the potatoes:',
    paragraph: '1 UnitLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n' +
      '                                           eirmod tempor invidunt ut\n' +
      '                                           labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n' +
      '                                           accusam et <span class="text-primary">justo duo.</span> Stet clita kasd gubergren, no sea\n' +
      '                                           takimata sanctus…',
  }, {
    url: '../../../assets/images/instructions/instructions-5.png',
    alt: '',
    number: '5',
    title: 'Prepare & roast the potatoes:',
    paragraph: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n' +
      '                                           eirmod tempor invidunt ut\n' +
      '                                           labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n' +
      '                                           accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n' +
      '                                           takimata sanctus…',
  }];

  faChecks = faCheck;
  faClock = faClock;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });
  }

}
