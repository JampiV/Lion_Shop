package com.lionsbeershop.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "category")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCategory;

    @NotNull
    @Column(name="category_name", nullable = false)
    private String nombre_categoria;

    @NotNull
    @Size(min = 1,max = 200, message = "La descripción no puede exceder los 200 caracteres")
    @Column(name = "category_description", nullable = false, length = 200)
    private String descripcion_categoria;

    @OneToMany(mappedBy ="category")
    private List<Producto> producto;
}