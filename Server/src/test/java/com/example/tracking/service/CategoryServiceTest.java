package com.example.tracking.service;

import com.example.tracking.Repository.CategoryRepository;
import com.example.tracking.Service.CategoryService;
import com.example.tracking.model.Category;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class CategoryServiceTest {

    @Mock
    private CategoryRepository categoryRepository;

    @InjectMocks
    private CategoryService categoryService;

    @Test
    public void testGetAllCategories() {
        // Arrange
        Category men = new Category();
        men.setId(1L);
        men.setName("Men");

        Category tShirts = new Category();
        tShirts.setId(2L);
        tShirts.setName("T-Shirts");
        tShirts.setParents(List.of(men));
        men.setSubcategories(List.of(tShirts));

        when(categoryRepository.findAll()).thenReturn(List.of(men, tShirts));

        // Act
        List<Category> categories = categoryService.getAllCategories();

        // Assert
        assertEquals(2, categories.size());
        assertTrue(categories.contains(men));
        assertTrue(categories.contains(tShirts));
    }

    @Test
    public void testGetTopLevelCategories() {
        // Arrange
        Category men = new Category();
        men.setId(1L);
        men.setName("Men");
        Category tShirts = new Category();
        tShirts.setId(2L);
        tShirts.setName("T-Shirts");
        tShirts.setParents(List.of(men));
        men.setSubcategories(List.of(tShirts));


        Category women = new Category();
        women.setId(2L);
        women.setName("Women");

        when(categoryRepository.findTopLevelCategories()).thenReturn(List.of(men, women));

        // Act
        List<Category> categories = categoryService.getTopLevelCategories();

        // Assert
        assertEquals(2, categories.size());
        assertTrue(categories.contains(men));
        assertTrue(categories.contains(women));
    }


}
