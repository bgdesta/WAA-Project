package edu.miu.WAAminimarket.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "user")
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String phone;
    private String username;
    private String email;
    private String password;
    private String status = "PENDING";

    @JsonBackReference
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "role_id")
    private Role role;

    @OneToMany(mappedBy = "user")
    private List<Orders> ordersList;

    public User(String name, String phone, String username, String email, String password) {
        this.name = name;
        this.phone = phone;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
