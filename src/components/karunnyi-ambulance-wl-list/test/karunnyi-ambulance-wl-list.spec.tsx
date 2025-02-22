import { newSpecPage } from '@stencil/core/testing';
import { KarunnyiAmbulanceWlList } from '../karunnyi-ambulance-wl-list';

describe('karunnyi-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KarunnyiAmbulanceWlList],
      html: `<karunnyi-ambulance-wl-list></karunnyi-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <karunnyi-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </karunnyi-ambulance-wl-list>
    `);
  });
});
