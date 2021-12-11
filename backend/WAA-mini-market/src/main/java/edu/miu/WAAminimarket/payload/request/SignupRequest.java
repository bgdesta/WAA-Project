package edu.miu.WAAminimarket.payload.request;

//import javax.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
public class SignupRequest {
    private String username;

    private String email;

    private String role;
//    private Set<String> role;

    private String password;
}
