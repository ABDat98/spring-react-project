package com.example.tracking.Controller;

import com.example.tracking.Service.ProductService;
import com.example.tracking.Service.ProductVariantService;
import com.example.tracking.model.Product;
import com.example.tracking.model.ProductVariant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private  ProductService productService;
    @Autowired
    private ProductVariantService productVariantService;




    @GetMapping("/category/{categoryId}")
    public List<Product> getProductsByCategory(@PathVariable Long categoryId) {
        return productService.getProductsByCategory(categoryId);
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.addProduct(product);
    }





}