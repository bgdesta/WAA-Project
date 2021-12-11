package edu.miu.WAAminimarket.domain;

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

	@OneToOne(mappedBy = "role")
	User user;

	public Role(ERole name){
		this.name = name;
	}
}
