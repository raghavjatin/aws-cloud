import express from "express";
import { ElasticSearchController } from "../controller/elasticSearch.controller";

class ElasticRoute {
  public router: express.Router = express.Router();
  public elasticSearchController: ElasticSearchController;
  constructor() {
    this.elasticSearchController = new ElasticSearchController();
    this.assign();
  }

  private assign(): void {
    this.router.get("/search", this.elasticSearchController.searchData);
    this.router.get(
      "/search/fulltext",
      this.elasticSearchController.seachFullTextQuery
    );
    this.router.get(
      "/search/range",
      this.elasticSearchController.seachRangeQuery
    );
    this.router.get(
      "/search/compound",
      this.elasticSearchController.seachCompoundQuery
    );
    this.router.get(
      "/search/term",
      this.elasticSearchController.seachTermLevenQuery
    );
    this.router.get(
      "/search/multiMatch",
      this.elasticSearchController.seachMultiMatchQuery
    );
  }
}

export default new ElasticRoute().router;
