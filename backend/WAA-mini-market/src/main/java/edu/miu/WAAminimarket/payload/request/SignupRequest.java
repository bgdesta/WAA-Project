package edu.miu.WAAminimarket.payload.request;

//import javax.validation.constraints.*;
import edu.miu.WAAminimarket.domain.Role;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class SignupRequest {
    private String username;
    private String email;
    private String password;
    private String role;

}
