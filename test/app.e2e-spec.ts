import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ApplicationModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ApplicationModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/todos')
      .expect(200)
      .expect(
        '[{"id":"FCBDE066-22BF-11ED-B410-AE5A90466E5A","comment":"Première ToDo"},{"id":"FCBDE340-22BF-11ED-B410-AE5A90466E5A","comment":"Deuxième ToDo"},{"id":"FCBDE368-22BF-11ED-B410-AE5A90466E5A","comment":"Troisième ToDo"}]',
      );
  });
});
