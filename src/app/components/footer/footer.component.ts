import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhoneAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
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
