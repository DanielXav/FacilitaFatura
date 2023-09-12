package com.danielxavier.FacilitaFatura.services;

import com.danielxavier.FacilitaFatura.dto.FaturaDTO;
import com.danielxavier.FacilitaFatura.entities.Fatura;
import com.danielxavier.FacilitaFatura.exceptions.DatabaseException;
import com.danielxavier.FacilitaFatura.exceptions.ResourceNotFoundException;
import com.danielxavier.FacilitaFatura.repositories.FaturaRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class FaturaService {

    @Autowired
    private FaturaRepository repository;

    @Transactional(readOnly = true)
    public Page<FaturaDTO> findAllPaged(PageRequest pageRequest){
        Page<Fatura> list = repository.findAll(pageRequest);
        return list.map(FaturaDTO::new);
    }

    @Transactional(readOnly = true)
    public FaturaDTO findById(Long id){
        Optional<Fatura> obj = repository.findById(id);
        Fatura entity = obj.orElseThrow(() -> new EntityNotFoundException("Fatura não encontrado!"));
        return new FaturaDTO(entity, entity.getClientes());
    }

    @Transactional
    public FaturaDTO insert(FaturaDTO dto){
        Fatura entity = new Fatura();
        entity.setTotalMonth(dto.getTotalMonth());
        entity = repository.save(entity);
        return new FaturaDTO(entity);
    }

    @Transactional
    public FaturaDTO update(Long id, FaturaDTO dto) {
        try {
            Fatura entity = repository.getReferenceById(id);
            entity.setTotalMonth(dto.getTotalMonth());
            entity = repository.save(entity);
            return new FaturaDTO(entity);
        }
        catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id não encontrado " + id);
        }
    }

    @Transactional(propagation = Propagation.SUPPORTS)
    public void delete(Long id) {
        if (!repository.existsById(id)){
            throw new ResourceNotFoundException("Fatura não encontrado!");
        }
        try {
            repository.deleteById(id);
        }
        catch (DataIntegrityViolationException e){
            throw new DatabaseException("Falha na integridade referencial");
        }
    }

}
