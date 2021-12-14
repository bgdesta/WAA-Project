package edu.miu.WAAminimarket.controller;

import edu.miu.WAAminimarket.domain.Product;
import edu.miu.WAAminimarket.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAll(){
        return productService.findAll();
    }

    // Register a new product
    @PostMapping
    public Product regProduct(@RequestBody Product prod){
        prod.setStatus("AVAILABLE");
        return productService.save(prod);
    }

    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable Long id){
        return productService.findProductById(id);
    }

    // Update Product data
    @PutMapping("/{id}")
    public Product updateProd(@PathVariable Long id, @RequestBody Product prod){
        return productService.updateProduct(id, prod);
    }

    // Delete Product
    @DeleteMapping("/{id}")
    public String deleteProduct(@PathVariable Long id){
        String p = getProductById(id).get().getStatus();
        if(p.equals("SOLD")){
            return "FAIL_DELETE";
        }
        return productService.deleteById(id);

    }
}
