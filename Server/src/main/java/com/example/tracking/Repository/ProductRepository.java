package com.example.tracking.Repository;

import com.example.tracking.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // Get all products for a specific category (subcategories)
    List<Product> findByCategoryId(Long categoryId);
}
