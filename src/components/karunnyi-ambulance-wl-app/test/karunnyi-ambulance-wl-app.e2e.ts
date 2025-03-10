import { newE2EPage } from '@stencil/core/testing';

describe('karunnyi-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<karunnyi-ambulance-wl-app></karunnyi-ambulance-wl-app>');

    const element = await page.find('karunnyi-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
