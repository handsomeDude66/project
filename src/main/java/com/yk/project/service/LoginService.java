package com.yk.project.service;

import com.alibaba.fastjson.JSONObject;
import com.yk.project.dao.LoginMapper;
import com.yk.project.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.http.HttpRequest;

@Service
public class LoginService {
    @Autowired
    private LoginMapper loginMapper;
    public User isLogin(HttpServletRequest req, HttpServletRequest resp) {

        try {
            String body = new String(req.getInputStream().readAllBytes());
            JSONObject json = JSONObject.parseObject(body);
            if (json != null) {
                String name = json.getString("name");
                String inv = json.getString("inv");
                return loginMapper.selectByInv(inv);
            }
            return null;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }
}
