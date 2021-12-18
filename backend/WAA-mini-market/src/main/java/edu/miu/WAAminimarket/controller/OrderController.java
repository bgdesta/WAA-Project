package edu.miu.WAAminimarket.controller;

import edu.miu.WAAminimarket.domain.Order;
import edu.miu.WAAminimarket.domain.Product;
import edu.miu.WAAminimarket.service.OrderService;
import edu.miu.WAAminimarket.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Order> getAllOrders(){
        return orderService.findAll();
    }

    @PostMapping
    public Order placeOrder(@RequestBody Order order){
        Product p;
        for (Product prod : order.getProductList()) {
            p = productService.findProductByModel(prod.getModel());
            if ( p != null){
                order.setStatus("ORDERED");
                p.setStatus("ORDERED");
                productService.save(p);
            }
        }
        return (Order) orderService.placeOrder(order);
    }

    @PutMapping("/{id}")
    public Order updateOrder(@PathVariable Long id, @RequestBody Order order){
        System.out.println("*******************************");
        return orderService.updateOrder(id, order);
    }
}
