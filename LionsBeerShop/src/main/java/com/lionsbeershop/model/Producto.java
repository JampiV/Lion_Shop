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

    public Integer getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Integer idProduct) {
        this.idProduct = idProduct;
    }

    public String getNombre_producto() {
        return nombre_producto;
    }

    public void setNombre_producto(String nombre_producto) {
        this.nombre_producto = nombre_producto;
    }

    public float getCosto_producto() {
        return costo_producto;
    }

    public void setCosto_producto(float costo_producto) {
        this.costo_producto = costo_producto;
    }

    public String getCategoria_producto() {
        return categoria_producto;
    }

    public void setCategoria_producto(String categoria_producto) {
        this.categoria_producto = categoria_producto;
    }

    public Categoria getCategory() {
        return category;
    }

    public void setCategory(Categoria category) {
        this.category = category;
    }
}
