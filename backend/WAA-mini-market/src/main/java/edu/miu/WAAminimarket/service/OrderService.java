package edu.miu.WAAminimarket.service;

import edu.miu.WAAminimarket.domain.Order;

import java.util.List;

public interface OrderService {
    List<Order> findAll();

    Order updateOrder(Long id, Order order);

    Order placeOrder(Order order);
}
