import { Component, OnInit } from '@angular/core';
import { faPhoneAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  faPhoneAlt = faPhoneAlt;
  faAt = faAt;
  faFacebookF = faFacebookF;
  faGoogle = faGoogle;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;

  constructor() {
  }

  ngOnInit() {
  }

}
