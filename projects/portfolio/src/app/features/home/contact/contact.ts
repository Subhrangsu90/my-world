import { Component } from '@angular/core';
import { Reveal } from 'projects/shared/directives/reveal';

@Component({
  selector: 'app-contact',
  imports: [Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
