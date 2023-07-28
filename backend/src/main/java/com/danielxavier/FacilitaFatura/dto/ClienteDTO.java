package com.danielxavier.FacilitaFatura.dto;

import com.danielxavier.FacilitaFatura.entities.Cliente;

public class ClienteDTO {

    private Long id;
    private String name;

    public ClienteDTO(){
    }

    public ClienteDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public ClienteDTO(Cliente entity){
        this.id = entity.getId();
        this.name = entity.getName();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
