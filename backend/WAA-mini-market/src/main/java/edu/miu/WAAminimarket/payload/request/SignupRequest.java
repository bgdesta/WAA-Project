package edu.miu.WAAminimarket.payload.request;

//import javax.validation.constraints.*;
import edu.miu.WAAminimarket.domain.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SignupRequest {
    private String name;
    private String phone;
    private String username;
    private String email;
    private String password;
    private String role;

}
