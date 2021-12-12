package edu.miu.WAAminimarket.service;

import edu.miu.WAAminimarket.domain.Product;

import java.util.List;

public interface ProductService {
    List<Product> findAll();

    Product save(Product prod);

    Product updateProduct(Long id, Product prod);

    void deleteById(Long id);
}
