import { newSpecPage } from '@stencil/core/testing';
import { KarunnyiAmbulanceWlList } from '../karunnyi-ambulance-wl-list';

describe('karunnyi-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KarunnyiAmbulanceWlList],
      html: `<karunnyi-ambulance-wl-list></karunnyi-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as KarunnyiAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
