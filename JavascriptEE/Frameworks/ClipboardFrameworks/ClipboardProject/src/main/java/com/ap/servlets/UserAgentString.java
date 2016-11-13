package com.ap.servlets;

import java.io.IOException;

public class UserAgentString extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        String userAgent = String.valueOf(request.getHeader("User-Agent"));
        response.getOutputStream().println(userAgent);
    }
}
