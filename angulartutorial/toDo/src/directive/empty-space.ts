import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appEmptySpace]'
})
export class EmptySpace {
  @Input('appEmptySpace') inputText: string = '';
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputText']) {
      const cleanedText = this.removeWhiteSpaces(this.inputText);
      this.renderer.setProperty(this.el.nativeElement, 'textContent', cleanedText);
    }
  }

  private removeWhiteSpaces(text: string): string {
    return text.replace(/\s+/g, '');
  }
}
