import { Component } from '@angular/core';
import { COMPANY_NAME } from 'src/app/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  companyName = COMPANY_NAME

}
