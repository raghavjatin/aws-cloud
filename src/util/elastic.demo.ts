import { faker } from "@faker-js/faker";
import client from "../config/elastic";

const count = 10000;

export class ElasticSearchService {
  public async elasticData(): Promise<any> {
    let personal_info = {};
    for (let i = 1; i < count; i++) {
      personal_info = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        middleName: faker.name.middleName(),
        gender: faker.name.gender(),
        birthdate: faker.date.birthdate(),
        amount: faker.finance.amount(),
      };
      await client.index({
        index: "personal_info",
        body: {
          ...personal_info,
        },
      });
    }
  }

  public async seachElasticData(): Promise<any> {
    const result = await client.search({
      index: "personal_info",
      size: 100,
      body: {
        query: {
          match_all: {},
        },
      },
    });
    return result.hits.hits;
  }

  public async seachFullTextQuery(): Promise<any> {
    const result = await client.search({
      index: "personal_info",
      body: {
        query: {
          match: {
            middleName: "Marlowe",
          },
        },
      },
    });
    return result.hits.hits;
  }

  public async seachMultiMatchQuery(): Promise<any> {
    const result = await client.search({
      index: "personal_info",
      body: {
        query: {
          multi_match: {
            query: "Marlowe",
            fields: ["firstName", "middleName", "lastName"],
          },
        },
      },
    });
    return result.hits.hits;
  }

  public async seachTermLevenQuery(): Promise<any> {
    const result = await client.search({
      index: "personal_info",
      body: {
        query: {
          term: { birthdate: "1997-06-24T06:33:40.693Z" },
        },
      },
    });
    return result.hits.hits;
  }

  public async seachRangeQuery(): Promise<any> {
    const result = await client.search({
      index: "personal_info",
      body: {
        query: {
          range: {
            amount: {
              gte: 100,
            },
          },
        },
      },
    });
    return result.hits.hits;
  }

  public async seachCompoundQuery(): Promise<any> {
    const result = await client.search({
      index: "personal_info",
      body: {
        query: {
          bool: {
            must: [
              { match: { firstName: "Garnet" } },
              { match: { lastName: "King" } },
            ],
            must_not: [{ match: { middleName: "Phoenix" } }],
            filter: [{ term: { gender: "Trans female" } }],
            should: [{ match: { birthdate: "1953-03-29T18:16:43.099Z" } }],
            minimum_should_match: 1,
            boost: 1.0,
          },
        },
      },
    });
    return result.hits.hits;
  }
}
