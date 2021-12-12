package edu.miu.WAAminimarket.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "role")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Enumerated(EnumType.STRING)
//	@Column(length = 20)
	private ERole name;

	@JsonManagedReference
	@OneToMany(mappedBy = "role")
	List<User> users;

	public Role(ERole name){
		this.name = name;
	}
}
