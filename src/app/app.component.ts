import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Quiz} from './quiz';
import {ParlaIaService} from './parla-ia.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  topic = '';
  domanda:Quiz|null = null;

  constructor(private ia:ParlaIaService) {
  }

  genera()
  {
    this.ia.generaDomanda(this.topic).subscribe(resp=>this.domanda=resp);
  }

  controlla($index: number)
  {
    this.ia.generaDomanda(this.topic).subscribe(resp=>this.domanda=resp);
    if($index==this.domanda?.answer_index)
      alert("BRAVISSIMO");
    else
      alert("sbagliato")

  }
}
