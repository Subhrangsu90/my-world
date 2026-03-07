import { Component } from '@angular/core';
import { Reveal } from 'projects/shared/directives/reveal';

@Component({
  selector: 'app-projects',
  imports: [Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {}
