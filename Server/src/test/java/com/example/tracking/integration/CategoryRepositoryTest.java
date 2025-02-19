package com.example.tracking.integration;


import com.example.tracking.Repository.CategoryRepository;
import com.example.tracking.model.Category;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.jdbc.DataJdbcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
public class CategoryRepositoryTest {

    @Autowired
    private CategoryRepository categoryRepository;

    @Test
    public void testSaveAndRetrieveCategory() {
        // Arrange
        Category category = new Category();
        category.setName("Men");
        category = categoryRepository.save(category);

        // Act
        Optional<Category> retrievedCategory = categoryRepository.findById(category.getId());

        // Assert
        assertTrue(retrievedCategory.isPresent());
        assertEquals("Men", retrievedCategory.get().getName());
    }

    @Test
    public void testDeleteCategoryWithSubcategories() {
        // Arrange
        Category men = new Category();
        men.setName("Men");

        Category tShirts = new Category();
        tShirts.setName("T-Shirts");


        tShirts.getParents().add(men);
        men.getSubcategories().add(tShirts);

        categoryRepository.save(men);

        // Act
        categoryRepository.delete(men);

        // Assert
        List<Category> categories = categoryRepository.findAll();
        assertTrue(categories.isEmpty());
    }
}
