import { newSpecPage } from '@stencil/core/testing';
import { KarunnyiAmbulanceWlApp } from '../karunnyi-ambulance-wl-app';

describe('karunnyi-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [KarunnyiAmbulanceWlApp],
      html: `<karunnyi-ambulance-wl-app base-path="/"></karunnyi-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("karunnyi-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [KarunnyiAmbulanceWlApp],
      html: `<karunnyi-ambulance-wl-app base-path="/ambulance-wl/"></karunnyi-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("karunnyi-ambulance-wl-list");
  });
});