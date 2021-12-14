package edu.miu.WAAminimarket.service;

import edu.miu.WAAminimarket.domain.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    List<Product> findAll();
    Optional<Product> findProductById(Long id);
    Product save(Product prod);

    Product updateProduct(Long id, Product prod);

    String deleteById(Long id);
}
