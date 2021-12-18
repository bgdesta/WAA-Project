package edu.miu.WAAminimarket.repository;

import edu.miu.WAAminimarket.domain.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
    Product findProductByModel(String model);
}
