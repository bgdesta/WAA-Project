package edu.miu.WAAminimarket.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "order")
@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date orderdate;
    private String shippingaddress;
    private String billingaddress;
    private String status;

    @ManyToOne(cascade = CascadeType.ALL)
    private Customer customer;
}
