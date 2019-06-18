package com.gyfish.formflow;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author geyu
 */
@SpringBootApplication
@MapperScan("com.gyfish.formflow.dao")
public class App {

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

}