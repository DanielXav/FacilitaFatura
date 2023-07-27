package com.danielxavier.FacilitaFatura.resources;

import com.danielxavier.FacilitaFatura.entities.Cliente;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/clientes")
public class ClienteResource {

    @GetMapping
    public ResponseEntity<List<Cliente>> findAll(){
        List<Cliente> list = new ArrayList<>();
        list.add(new Cliente(1L, "Sebastião"));
        list.add(new Cliente(2L, "Zé Brito"));
        return ResponseEntity.ok().body(list);
    }
}
