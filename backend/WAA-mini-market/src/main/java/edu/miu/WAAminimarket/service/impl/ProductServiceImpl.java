package edu.miu.WAAminimarket.service.impl;

import edu.miu.WAAminimarket.domain.Product;
import edu.miu.WAAminimarket.repository.ProductRepository;
import edu.miu.WAAminimarket.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> findAll() {
        return (List<Product>) productRepository.findAll();
    }

    @Override
    public Optional<Product> findProductById(Long id) {
        return productRepository.findById(id);
    }

    @Override
    public Product save(Product prod) {
        return productRepository.save(prod);
    }

    @Override
    public Product updateProduct(Long id, Product product) {
        Product prod = productRepository.findById(id).get();
        prod.setStatus(product.getStatus());
        return productRepository.save(prod);
    }

    @Override
    public String deleteById(Long id) {
        productRepository.deleteById(id);
        return "Item successfully deleted!";
    }
}
