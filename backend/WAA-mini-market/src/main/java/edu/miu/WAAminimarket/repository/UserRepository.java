package edu.miu.WAAminimarket.repository;

import edu.miu.WAAminimarket.domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);

	@Query("SELECT u FROM User u WHERE u.role.name = 'ROLE_SELLER' AND u.status = :status")
	 List<User> findAllPendingSellers(String status);
}
