import { faker } from "@faker-js/faker";
import client from "../config/elastic";

const count = 1000;

export class ElasticSearchService {
  public async elasticData(): Promise<any> {
    let blog = {};
    for (let i = 1; i < count; i++) {
      blog = {
        title: faker.lorem.text(),
        description: faker.lorem.paragraph(),
        date: faker.date.past(),
      };
      await client.index({
        index: "blog",
        body: {
          ...blog,
        },
      });
    }
  }

  public async seachElasticData(): Promise<any> {
    const result = await client.search({
      index: "blog",
      body: {
        query: {
          match_all: {},
        },
      },
    });
    return result.hits.hits;
  }
}
