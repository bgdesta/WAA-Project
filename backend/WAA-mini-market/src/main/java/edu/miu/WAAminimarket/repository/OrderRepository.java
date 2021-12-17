package edu.miu.WAAminimarket.repository;

import edu.miu.WAAminimarket.domain.Orders;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Orders, Long> {
}
