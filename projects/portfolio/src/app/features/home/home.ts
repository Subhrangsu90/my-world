import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Skills } from './skills/skills';
import { WorkExperience } from './work-experience/work-experience';
import { Projects } from './projects/projects';
import { Testimonials } from './testimonials/testimonials';
import { Writing } from './writing/writing';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Skills, WorkExperience, Projects, Testimonials, Writing, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
