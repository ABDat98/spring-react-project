package com.example.tracking.Repository;

import com.example.tracking.Enum.Color;
import com.example.tracking.Enum.Size;
import com.example.tracking.model.ProductVariant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductVariantRepository extends JpaRepository<ProductVariant, Long> {

    // Get all variants of a specific product
    List<ProductVariant> findByProductId(Long productId);
    Optional<ProductVariant> findByProductIdAndColorAndSize(Long productId, Color color, Size size);

}