import { Request, Response, NextFunction } from "express";
import { createProductService } from "../services/product/createProduct.service";
import { softDeleteProductService } from "../services/product/deleteProduct.service";
import { getAllProductsService } from "../services/product/getAllProduct.service";
import { getProductByIdService } from "../services/product/getProductById.service";
import { updateProductService } from "../services/product/updateProduct.service";


export class ProductController {
  async createProductController(req: Request, res: Response, next: NextFunction) {
    try {
      return createProductService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async deleteProductController(req: Request, res: Response, next: NextFunction) {
    try {
      return softDeleteProductService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async getAllProductController(req: Request, res: Response, next: NextFunction) {
    try {
      return getAllProductsService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async getProductByIdController(req: Request, res: Response, next: NextFunction) {
    try {
      return getProductByIdService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  async updateProductController(req: Request, res: Response, next: NextFunction) {
    try {
      return updateProductService(req, res, next);
    } catch (error) {
      next(error);
    }
  }
}
