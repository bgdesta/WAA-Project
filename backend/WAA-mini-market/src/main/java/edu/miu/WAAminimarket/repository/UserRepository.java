package edu.miu.WAAminimarket.repository;

import edu.miu.WAAminimarket.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
