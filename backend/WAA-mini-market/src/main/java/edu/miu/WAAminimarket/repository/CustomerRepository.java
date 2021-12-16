package edu.miu.WAAminimarket.repository;

import edu.miu.WAAminimarket.domain.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Long> {
}
