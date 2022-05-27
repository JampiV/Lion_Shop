package com.lionsbeershop.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "product")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProduct;

    @Column(name="producto_name", nullable = false)
    private String nombre_producto;

    @NotNull
    @Column(name="product_cost")
    private float costo_producto;

    @NotNull
    @Column(name = "category")
    private String categoria_producto;
    @ManyToOne
    @JoinColumn(name = "idCategory", nullable = false, foreignKey = @ForeignKey(name = "FK_category_Id"))
    private Categoria category;

}
