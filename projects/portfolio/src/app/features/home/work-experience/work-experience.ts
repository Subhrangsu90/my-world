import { Component, signal } from '@angular/core';
import { Reveal } from 'projects/shared/directives/reveal';

@Component({
  selector: 'app-work-experience',
  imports: [Reveal],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.css',
})
export class WorkExperience {
  public activeTab = signal('nexus');

  setActiveTab(tab: string) {
    console.log('Tab', tab);

    this.activeTab.set(tab);
    console.log('Active Tab', this.activeTab());
  }
}
