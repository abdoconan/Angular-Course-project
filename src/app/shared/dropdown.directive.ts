import { Directive, OnInit, ElementRef, Renderer2, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit, AfterViewInit {
  
  

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    this._elementRef.nativeElement.classList.toggle('show');
    this._elementRef.nativeElement.classList.toggle('custom-show-dropdown-menu');
  }
  

  ngAfterViewInit() {
    
  }

  @HostListener('click') onClick(event: Event){
    let children: HTMLCollection =  this._elementRef.nativeElement.children;
    console.log(children);
    let child = Array.from(children).find(child => child.classList.contains('dropdown-menu'));
    if(child){
      child.classList.toggle('show')
      child.classList.toggle('custom-show-dropdown-menu')
    }
    

  }

}
