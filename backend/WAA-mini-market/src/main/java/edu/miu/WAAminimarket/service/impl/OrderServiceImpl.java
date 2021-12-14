package edu.miu.WAAminimarket.service.impl;

import edu.miu.WAAminimarket.domain.Order;
import edu.miu.WAAminimarket.repository.OrderRepository;
import edu.miu.WAAminimarket.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Override
    public List<Order> findAll() {
        return (List<Order>) orderRepository.findAll();
    }
}
