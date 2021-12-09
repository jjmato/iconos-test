import { newSpecPage } from '@stencil/core/testing';
import { MyIcon } from '../my-icon';

describe('my-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyIcon],
      html: `<my-icon></my-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <my-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-icon>
    `);
  });
});
