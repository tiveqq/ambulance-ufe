import { newE2EPage } from '@stencil/core/testing';

describe('karunnyi-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<karunnyi-ambulance-wl-list></karunnyi-ambulance-wl-list>');

    const element = await page.find('karunnyi-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
