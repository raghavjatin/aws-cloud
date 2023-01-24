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
}
