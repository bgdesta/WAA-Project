package edu.miu.WAAminimarket.controller;

import edu.miu.WAAminimarket.domain.Customer;
import edu.miu.WAAminimarket.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @GetMapping
    public List<Customer> getAllCustomers(){
        return customerService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Customer> getCustomerById(@PathVariable Long id){
        return customerService.findCustomerById(id);
    }

    @PostMapping
    public Customer registerCustomer(@RequestBody Customer cust){
        return customerService.registerCustomer(cust);
    }

    @PutMapping("/{id}")
    public Customer updateCustomerInfo(@PathVariable Long id, @RequestBody Customer cust){
        return customerService.updateCustomerInfo(id, cust);
    }
}
