package edu.miu.WAAminimarket.controller;

import edu.miu.WAAminimarket.domain.Order;
import edu.miu.WAAminimarket.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<Order> getAllOrders(){
        return orderService.findAll();
    }

    @PostMapping
    public List<Order> placeOrder(@RequestBody Order order){

        return orderService.placeOrder(order);
    }

    @PutMapping("/{id}")
    public Order cancelOrder(@PathVariable("id") Long id, @RequestBody Order order){
        return orderService.updateOrder(id, order);
    }
}
