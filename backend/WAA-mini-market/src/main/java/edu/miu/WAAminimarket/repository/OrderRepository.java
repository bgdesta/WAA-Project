package edu.miu.WAAminimarket.repository;

import edu.miu.WAAminimarket.domain.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {
}
