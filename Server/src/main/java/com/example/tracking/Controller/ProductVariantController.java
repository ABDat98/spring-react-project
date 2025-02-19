package com.example.tracking.Controller;

import com.example.tracking.Enum.Color;
import com.example.tracking.Enum.Size;
import com.example.tracking.Service.ProductVariantService;
import com.example.tracking.model.ProductVariant;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product-variants")
public class ProductVariantController {

    private final ProductVariantService productVariantService;

    public ProductVariantController(ProductVariantService productVariantService) {
        this.productVariantService = productVariantService;
    }

    // Add a new product variant
    @PostMapping
    public ProductVariant addProductVariant(@RequestBody ProductVariant productVariant) {
        return productVariantService.addProductVariant(productVariant);
    }

    // Get all variants for a product
    @GetMapping("/product/{productId}")
    public List<ProductVariant> getProductVariants(@PathVariable Long productId) {
        return productVariantService.getProductVariantsByProductId(productId);
    }

    @PostMapping("/products/{productId}/variants")
    public ResponseEntity<String> addOrUpdateVariant(
            @PathVariable Long productId,
            @RequestParam Color color,
            @RequestParam Size size,
            @RequestParam int stockToAdd) {

        productVariantService.addOrUpdateVariantStock(productId, color, size, stockToAdd);
        return ResponseEntity.ok("Stock updated successfully");
    }

}
