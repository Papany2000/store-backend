import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect([{ "image": "https://kartinkin.net/uploads/posts/2021-07/thumbs/1626217214_28-kartinkin-com-p-marinovannie-ovoshchi-yeda-krasivo-foto-33.jpg", "price": 400, "name": "Яблоки", "id": "61d20c6c0ec2fc35de51120e" }, { "image": "https://img.povar.ru/list/6d/77/d7/43/ostrie_marinovannie_ogurchiki-308112.JPG", "price": 300, "name": "Огурцы", "id": "61d211f26087f79f4a4a2b53" }, { "image": "https://proprikol.ru/wp-content/uploads/2020/08/kartinki-kivi-34.jpg", "price": 400, "name": "киви", "id": "61d2cf417f5a37973cbf38bd" }]);
  });
});
