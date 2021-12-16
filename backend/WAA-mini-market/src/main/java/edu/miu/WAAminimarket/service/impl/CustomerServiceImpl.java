package edu.miu.WAAminimarket.service.impl;

import edu.miu.WAAminimarket.domain.Customer;
import edu.miu.WAAminimarket.repository.CustomerRepository;
import edu.miu.WAAminimarket.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> findAll() {
        return (List<Customer>) customerRepository.findAll();
    }

    @Override
    public Customer registerCustomer(Customer cust) {
        return customerRepository.save(cust);
    }

    @Override
    public Customer updateCustomerInfo(Long id, Customer cust) {
        Customer c = customerRepository.findById(id).get();
        System.out.println("-------------------------------------------" + c.getOrderList());
        c.setOrderList(cust.getOrderList());
        return customerRepository.save(c);
    }

    @Override
    public Optional<Customer> findCustomerById(Long id) {
        return customerRepository.findById(id);
    }
}
