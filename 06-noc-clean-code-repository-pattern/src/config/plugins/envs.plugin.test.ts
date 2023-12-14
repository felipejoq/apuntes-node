import { envs } from './envs.plugin';
import { describe, test, expect, jest } from '@jest/globals';


describe('envs.plugin.ts', () => {

  test('should return env options', () => {
    expect(envs).toEqual({
      PORT: 3000,
      MAILER_SERVICE: 'gmail',
      MAILER_EMAIL: 'felipe@goooogle.com',
      MAILER_SECRET_KEY: '123123123123',
      PROD: false,
      MONGO_URL: 'mongodb://felipe:123123@localhost:27017',
      MONGO_DB_NAME: 'NOC',
      MONGO_USER: 'felipe',
      MONGO_PASS: '123123'
    });


  });


  test('should return error if not found env', async () => {

    jest.resetModules();
    process.env.PORT = 'ABC';

    try {
      await import('./envs.plugin');
      expect(true).toBe(false);


    } catch (error) {
      expect(`${error}`).toContain('"PORT" should be a valid integer');
    }


  })



})