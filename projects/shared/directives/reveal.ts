import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[reveal]',
})
export class Reveal {
  private el: ElementRef = inject(ElementRef);

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }
}
