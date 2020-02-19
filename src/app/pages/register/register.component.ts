import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
  faAddressCard,
  faCarrot,
  faChevronLeft,
  faChevronRight,
  faCreditCard,
  faMoneyCheckAlt,
  faPaperPlane,
  faTruck
} from '@fortawesome/free-solid-svg-icons';
import {faCcAmex, faCcDiscover, faCcMastercard, faCcVisa} from '@fortawesome/free-brands-svg-icons';

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
  cc: any = {
    name: '',
    number: '',
    date: '01/02',
    cvc: '',
  };

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

  getCreditCardIcon(ccNumber) {
    const initialDigit = ccNumber.substring(0, 1);
    switch (initialDigit) {
      case '3':
        return faCcAmex;
      case '4':
        return faCcVisa;
      case '5':
        return faCcMastercard;
      case '6':
        return faCcDiscover;
      default:
        return faCreditCard;
    }
  }
}
