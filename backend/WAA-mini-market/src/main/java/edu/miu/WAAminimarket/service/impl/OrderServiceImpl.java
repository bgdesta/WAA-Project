package edu.miu.WAAminimarket.service.impl;

import edu.miu.WAAminimarket.domain.Orders;
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
    public List<Orders> findAll() {
        return (List<Orders>) orderRepository.findAll();
    }

    @Override
    public Orders updateOrder(Long id, Orders order) {
        Orders ord = orderRepository.findById(id).get();
        ord.setStatus("CANCELLED");
        return orderRepository.save(ord);
    }

    @Override
    public List<Orders> placeOrder(Orders order) {
        return (List<Orders>) orderRepository.save(order);
    }
}
