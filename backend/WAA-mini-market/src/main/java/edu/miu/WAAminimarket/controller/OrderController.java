package edu.miu.WAAminimarket.controller;

import edu.miu.WAAminimarket.domain.Orders;
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
    public List<Orders> getAllOrders(){
        return orderService.findAll();
    }

    @PostMapping
    public List<Orders> placeOrder(@RequestBody Orders order){

        return orderService.placeOrder(order);
    }

    @PutMapping("/{id}")
    public Orders cancelOrder(@PathVariable("id") Long id, @RequestBody Orders order){
        return orderService.updateOrder(id, order);
    }
}
