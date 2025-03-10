import { newE2EPage } from '@stencil/core/testing';

describe('karunnyi-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<karunnyi-ambulance-wl-editor></karunnyi-ambulance-wl-editor>');

    const element = await page.find('karunnyi-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
