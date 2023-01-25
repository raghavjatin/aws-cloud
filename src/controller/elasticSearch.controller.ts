import { Response, Request } from "express";
import { ElasticSearchService } from "../util/elastic.demo";

export class ElasticSearchController {
  private elasticSearchService: ElasticSearchService;

  constructor() {
    this.elasticSearchService = new ElasticSearchService();
  }
  public searchData = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.elasticSearchService.seachElasticData();
      res.send(response);
    } catch (err) {
      // console.log(err);
    }
  };

  public seachFullTextQuery = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const response = await this.elasticSearchService.seachFullTextQuery();
      res.send(response);
    } catch (err) {
      // console.log(err);
    }
  };
  public seachMultiMatchQuery = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const response = await this.elasticSearchService.seachMultiMatchQuery();
      res.send(response);
    } catch (err) {
      // console.log(err);
    }
  };
  public seachTermLevenQuery = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const response = await this.elasticSearchService.seachTermLevenQuery();
      res.send(response);
    } catch (err) {
      // console.log(err);
    }
  };
  public seachRangeQuery = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const response = await this.elasticSearchService.seachRangeQuery();
      res.send(response);
    } catch (err) {
      // console.log(err);
    }
  };
  public seachCompoundQuery = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const response = await this.elasticSearchService.seachCompoundQuery();
      res.send(response);
    } catch (err) {
      // console.log(err);
    }
  };
}
