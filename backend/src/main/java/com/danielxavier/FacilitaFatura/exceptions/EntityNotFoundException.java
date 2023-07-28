package com.danielxavier.FacilitaFatura.exceptions;

public class EntityNotFoundException extends RuntimeException {

    public EntityNotFoundException(String msg){
        super(msg);
    }
}
