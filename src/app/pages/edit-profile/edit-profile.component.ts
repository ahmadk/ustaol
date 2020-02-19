import { Component, OnInit } from '@angular/core';
import {faCheck, faCreditCard} from '@fortawesome/free-solid-svg-icons';
import {faCcVisa, faCcMastercard, faCcAmex, faCcDiscover} from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  faChecks = faCheck;
  faCcVisa = faCcVisa;
  faCcMastercard = faCcMastercard;
  faCcAmex = faCcAmex;
  currentOrientation = 'vertical';
  private checkboxGroupForm: FormGroup;
  numberOfPeople = 2;
  cc: any = {
    name: '',
    number: '',
    date: '01/02',
    cvc: '',
  };
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
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
