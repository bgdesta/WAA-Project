package edu.miu.WAAminimarket.helper;

import edu.miu.WAAminimarket.domain.Customer;
import edu.miu.WAAminimarket.domain.Product;

import javax.persistence.CascadeType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

public class OrderData {
    private Long id;
    private String orderdate;
    private String shippingaddress;
    private String billingaddress;
    private String status;

    private List<Product> productList;
}
