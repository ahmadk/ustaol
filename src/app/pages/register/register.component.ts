import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faChevronRight,
  faChevronLeft,
  faAddressCard,
  faCarrot,
  faTruck,
  faMoneyCheckAlt,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faCcVisa = faCcVisa;
  faAddressCard = faAddressCard;
  faCarrot = faCarrot;
  faTruck = faTruck;
  faMoneyCheckAlt = faMoneyCheckAlt;
  faPaperPlane = faPaperPlane;
  isLinear = false;
  numberOfPeople = 0;
  username = 'Angular';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  private checkboxGroupForm: FormGroup;


  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });
  }

}
