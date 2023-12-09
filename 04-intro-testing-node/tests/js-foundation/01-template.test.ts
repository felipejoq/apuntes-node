import { emailTemplate } from "../../src/js-foundation/01-template";
import { describe, test, expect } from '@jest/globals';



describe('js-foundation/01-template.ts', () => {

  test('emailTemplate should contain a greeting',() =>{

      expect( emailTemplate ).toContain('Hi, ');
  });

  test('emailTemplate should contain {{name}} and {{orderId}}', () => {

      expect( emailTemplate ).toMatch(/{{name}}/);
      expect( emailTemplate ).toMatch(/{{orderId}}/);

      expect( emailTemplate ).toContain('{{name}}');
      expect( emailTemplate ).toContain('{{orderId}}');

  });

});




