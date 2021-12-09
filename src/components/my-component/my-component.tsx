import { Component, Prop, h, Host } from '@stencil/core';
import { SVGLoader } from '../../utils/svg-loader';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  async componentWillLoad() {
    console.log('MyComponent componentWillLoad', this);
    await new SVGLoader().loadSVG();
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <Host>
        <div>Hello, World! I'm {this.getText()}</div>
        <article>
          <h3>component</h3>
          <my-icon iconID="icon-vodafone-red"></my-icon>
        </article>
        <article>
          <h3>svg</h3>
          <svg viewBox="0 0 100 100">
            <use href="#icon-3g-mid"></use>
          </svg>
        </article>
      </Host>
    );
  }
}
