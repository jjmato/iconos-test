import { Component, Element, h, Host, Prop, VNode } from '@stencil/core';
import { IconID } from './icons-id';

@Component({
  tag: 'my-icon',
  styleUrl: 'my-icon.css',
  shadow: true,
})
export class MyIcon {
  @Prop()
  iconID: IconID;

  @Element() el: HTMLElement;

  componentDidRender() {
    console.log('MyIcon componentDidRender');
    if (!this.getGlobalSVG()) return;
    if (this.hasIcon()) return;
    this.append(this.getSymbol());
  }

  render() {
    return (
      <Host>
        <svg viewBox="0 0 100 100">
          <use href={'#' + this.iconID}></use>
        </svg>
      </Host>
    );
  }

  private get shadow(): ShadowRoot {
    return this.el.shadowRoot;
  }

  private getGlobalSVG(): SVGElement {
    return this.shadow.querySelector(`svg`);
  }

  private append(element): void {
    this.getGlobalSVG().append(element);
  }

  private getSymbol()  {
    return document.querySelector('#' + this.iconID).cloneNode(true);
  }

  private hasIcon(): boolean {
    return !!this.shadow.querySelector('#' + this.iconID);
  }
}
