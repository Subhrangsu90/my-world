import { Component } from '@angular/core';
import { Reveal } from 'projects/shared/directives/reveal';

@Component({
  selector: 'app-writing',
  imports: [Reveal],
  templateUrl: './writing.html',
  styleUrl: './writing.css',
})
export class Writing {}
