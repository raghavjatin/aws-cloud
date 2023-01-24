import express from "express";
import { ElasticSearchController } from "../controller/elasticSearch.controller";

class ElasticRoute {
  public router: express.Router = express.Router();
  public elasticSearchController: ElasticSearchController;
  constructor() {
    this.elasticSearchController = new ElasticSearchController();
    this.searchData();
  }

  searchData() {
    this.router.get("/search", this.elasticSearchController.searchData);
  }
}

export default new ElasticRoute().router;
