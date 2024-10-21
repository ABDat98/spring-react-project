package com.example.tracking.mapper;

import com.example.tracking.dto.UserDto;
import com.example.tracking.model.User;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;




@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserMapper {

    User toEntity(UserDto userDto);

    @InheritInverseConfiguration
    UserDto fromEntity(User user);

}
