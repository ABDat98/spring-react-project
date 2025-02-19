package com.example.tracking.Service;

import com.example.tracking.Enum.Color;
import com.example.tracking.Enum.Size;
import com.example.tracking.Repository.ProductVariantRepository;
import com.example.tracking.model.Product;
import com.example.tracking.model.ProductVariant;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductVariantService {

    private final ProductVariantRepository productVariantRepository;

    public ProductVariantService(ProductVariantRepository productVariantRepository) {
        this.productVariantRepository = productVariantRepository;
    }

    // Add a new product variant
    public ProductVariant addProductVariant(ProductVariant productVariant) {
        Product product = new Product();
        productVariant.setProduct(product);  // Assuming you are setting the product here
        return productVariantRepository.save(productVariant);
    }

    // Get all variants for a specific product
    public List<ProductVariant> getProductVariantsByProductId(Long productId) {
        return productVariantRepository.findByProductId(productId);
    }

    public void addOrUpdateVariantStock(Long productId, Color color, Size size, int stockToAdd) {
        // Check if the variant already exists
        Optional<ProductVariant> existingVariant = productVariantRepository.findByProductIdAndColorAndSize(productId, color, size);

        if (existingVariant.isPresent()) {
            // Update stock for existing variant
            ProductVariant variant = existingVariant.get();
            variant.setStock(variant.getStock() + stockToAdd);
            productVariantRepository.save(variant);
        } else {
            // Create new variant if it doesn't exist
            ProductVariant newVariant = new ProductVariant();
            Product product =  new Product();
            newVariant.setProduct(product);
            newVariant.setColor(color);
            newVariant.setSize(size);
            newVariant.setStock(stockToAdd);
            productVariantRepository.save(newVariant);
        }
    }

}