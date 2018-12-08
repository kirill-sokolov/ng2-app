import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  @HostBinding('style.backgroundColor') background: string;
  @Input('appBackground') hoverColor: string = 'green';
  @Input('defaultColor') defaultColor: string = 'transparent';

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    const {nativeElement} = this.element;
    this.background = this.defaultColor;
    // renderer - crossplatform
    // this.renderer.addClass(nativeElement, 'white-text');

    // BAD PRACTICE
    // this.element.nativeElement.style.background = '#666';
  }

  @HostListener('mouseenter', ['$event']) mouseEnter(event: Event) {
    const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', '#666');
    this.background = this.hoverColor;
    this.renderer.addClass(nativeElement, 'white-text');
  }

  @HostListener('mouseleave', ['$event']) mouseLeave(event: Event) {
    const {nativeElement} = this.element;
    // this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
    this.background = 'transparent';
    this.renderer.removeClass(nativeElement, 'white-text');
  }

}
