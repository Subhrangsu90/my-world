import { Component } from '@angular/core';
import { Reveal } from 'projects/shared/directives/reveal';

@Component({
  selector: 'app-testimonials',
  imports: [Reveal],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {}
