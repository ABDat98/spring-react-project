package com.example.tracking.model;

import com.example.tracking.Enum.Color;
import com.example.tracking.Enum.Size;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ProductVariant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Enumerated(EnumType.STRING)
    private Color color;

    @Enumerated(EnumType.STRING)
    private Size size;

    private int stock;
}
