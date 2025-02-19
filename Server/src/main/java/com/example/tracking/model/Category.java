package com.example.tracking.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // Self-referencing Many-to-Many for hierarchical structure
    @ManyToMany
    @JoinTable(
            name = "category_hierarchy",
            joinColumns = @JoinColumn(name = "subcategory_id"),
            inverseJoinColumns = @JoinColumn(name = "parent_id")
    )
    @JsonBackReference
    private List<Category> parents = new ArrayList<>();

    @ManyToMany(mappedBy = "parents")
    @JsonManagedReference // Manages the serialization on subcategories
    private List<Category> subcategories = new ArrayList<>();;
}