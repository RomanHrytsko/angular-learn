import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBoldAndColorful]'
})
export class BoldDirective implements OnInit {
  @Input() color: string;

  constructor(private element: ElementRef) {
    element.nativeElement.style.fontWeight = 'bold';
    element.nativeElement.style.backgroundColor = this.color;
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
  }
}
