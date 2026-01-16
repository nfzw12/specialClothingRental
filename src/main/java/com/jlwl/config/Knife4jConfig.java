package com.jlwl.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * Knife4j 接口文档配置类
 */
@Configuration
@EnableSwagger2
public class Knife4jConfig {

    /**
     * 配置API基本信息
     */
    @Bean
    public ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("服装租借管理系统API文档")
                .description("基于SpringBoot框架的服装租借管理系统接口文档")
                .contact(new Contact("开发者", "", ""))
                .version("1.0.0")
                .build();
    }

    /**
     * 创建API应用
     * 扫描指定包中的Controller定义的API
     */
    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.controller"))
                .paths(PathSelectors.any())
                .build();
    }
}
