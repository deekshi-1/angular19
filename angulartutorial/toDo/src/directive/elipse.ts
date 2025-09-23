import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appElipse]'
})
export class Elipse {
  @Input('appElipse') tooltipText: string = '';
  private tooltipElement: HTMLElement | null = null;
  private isTooltipVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.isTooltipVisible ? this.hideTooltip() : this.showTooltip();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside && this.isTooltipVisible) {
      this.hideTooltip();
    }
  }

  private showTooltip() {
    console.log("dsfsdf");

    const tooltip = this.renderer.createElement('span');
    tooltip.innerText = this.tooltipText;
    this.renderer.addClass(tooltip, 'tooltip');
    this.renderer.appendChild(this.el.nativeElement, tooltip);
    this.tooltipElement = tooltip;
    this.isTooltipVisible = true;
  }

  private hideTooltip() {
    console.log("aaaaaaa");
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
      this.tooltipElement = null;
      this.isTooltipVisible = false;
    }
  }
}
