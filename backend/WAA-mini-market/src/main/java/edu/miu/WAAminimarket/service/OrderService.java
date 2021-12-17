package edu.miu.WAAminimarket.service;

import edu.miu.WAAminimarket.domain.Orders;

import java.util.List;

public interface OrderService {
    List<Orders> findAll();

    Orders updateOrder(Long id, Orders order);

    List<Orders> placeOrder(Orders order);
}
