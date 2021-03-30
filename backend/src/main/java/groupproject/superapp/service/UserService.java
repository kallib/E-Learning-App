package groupproject.superapp.service;


import groupproject.superapp.model.AppUser;


import java.util.List;


public interface UserService {
    AppUser findUserByEmail(String email);

    //void createAccount(UserDto userDto) ;

    AppUser findAppUserByUsername(String username);

    void updateUser(AppUser user);

    List<AppUser> findAllUsers();

    void deleteUser(String id); //allazei to status se false
}
