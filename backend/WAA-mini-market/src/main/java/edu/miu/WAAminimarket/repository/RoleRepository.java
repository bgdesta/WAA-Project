package edu.miu.WAAminimarket.repository;

import edu.miu.WAAminimarket.domain.ERole;
import edu.miu.WAAminimarket.domain.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
//	Optional<String> findByName(ERole name);
}
