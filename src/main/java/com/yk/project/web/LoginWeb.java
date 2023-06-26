package com.yk.project.web;

import com.yk.project.pojo.User;
import com.yk.project.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
@Controller
public class LoginWeb {
    @Autowired
    private LoginService loginService;

    @RequestMapping("/loginIn.do")
    @ResponseBody
    public User Login(HttpServletRequest req, HttpServletRequest resp) {
        return loginService.isLogin(req, resp);
    }
}
