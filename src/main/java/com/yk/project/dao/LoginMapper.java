package com.yk.project.dao;

import com.yk.project.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface LoginMapper {
    @Select("select * from login_user where inv_code = #{inv}")
    User selectByInv(@Param("inv") String inv);
}
