package com.example.tracking.Service;

import com.example.tracking.Repository.CategoryRepository;
import com.example.tracking.Repository.ProductRepository;
import com.example.tracking.model.Category;
import com.example.tracking.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private  ProductRepository productRepository;
    @Autowired
    private  CategoryRepository categoryRepository;


    public List<Product> getProductsByCategory(Long categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }

    public Product addProduct(Product product) {
        // Check if category has subcategories
        Category category = categoryRepository.findById(product.getCategory().getId())
                .orElseThrow(() -> new RuntimeException("Category not found"));

        if (!category.getSubcategories().isEmpty()) {
            throw new RuntimeException("Cannot add product to a category with subcategories");
        }

        return productRepository.save(product);
    }
}