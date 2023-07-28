package com.danielxavier.FacilitaFatura.services;

import com.danielxavier.FacilitaFatura.dto.ClienteDTO;
import com.danielxavier.FacilitaFatura.entities.Cliente;
import com.danielxavier.FacilitaFatura.exceptions.EntityNotFoundException;
import com.danielxavier.FacilitaFatura.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository repository;

    @Transactional(readOnly = true)
    public List<ClienteDTO> findAll(){
        List<Cliente> list = repository.findAll();
        return list.stream().map(ClienteDTO::new).toList();
    }

    @Transactional(readOnly = true)
    public ClienteDTO findById(Long id){
        Optional<Cliente> obj = repository.findById(id);
        Cliente entity = obj.orElseThrow(() -> new EntityNotFoundException("Cliente não encontrado!"));
        return new ClienteDTO(entity);
    }
}
