import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ 
     selector: '[dynamicColor]' 
})
export class DynamicColorDirective {
   @Input('dynamicColor') dynamicColor: string;
   @Input('dynamicWidth') dynamicWidth: string;
   @Input('dynamicHeight') dynamicHeight: string;
   @Input() defaultValue: string;
   constructor(private elRef: ElementRef) {
   }
   @HostListener('mouseover') onMouseOver() {
     this.changeBackgroundColor(this.dynamicColor || this.defaultValue);
     this.changeWidth(this.dynamicWidth);
     this.changeHeight(this.dynamicHeight);
   }
   @HostListener('mouseleave') onMouseLeave() {
     this.changeBackgroundColor(this.dynamicColor);
     this.changeWidth(this.dynamicWidth);
     this.changeHeight(this.dynamicHeight);
   }
   private changeBackgroundColor(color: string) {
     this.elRef.nativeElement.style.backgroundColor = color;
   }  

   private changeWidth(width: string) {
    this.elRef.nativeElement.style.width = width;
  }

  private changeHeight(height: string) {
    this.elRef.nativeElement.style.height = height;
  }
} 