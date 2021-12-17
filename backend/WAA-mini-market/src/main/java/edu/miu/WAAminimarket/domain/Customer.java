//package edu.miu.WAAminimarket.domain;
//
//import com.fasterxml.jackson.annotation.JsonManagedReference;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import javax.persistence.*;
//import java.util.List;
//
//@NoArgsConstructor
//@AllArgsConstructor
//@Getter
//@Setter
////@Entity
////@Table(name = "customer")
//public class Customer {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//    private String name;
//    private String phone;
//
//
//    @JsonManagedReference
//    @OneToMany(mappedBy = "customer")
//    private List<Order> orderList;
//
////    @OneToMany(mappedBy = "customer")
////    private List<Cart> carts;
//}
