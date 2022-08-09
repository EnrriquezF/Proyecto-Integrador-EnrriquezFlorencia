package com.portfolioenfr.portfolioenrfr.Interface;

import com.portfolioenfr.portfolioenrfr.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //traer lista de personas
    public List<Persona> getPersona();
     
    //guarda un objeto tipo persona
    public void savePersona(Persona persona);
    
    //elimina objeto por ID
    public void deletePersona(Long id);
    
    //busca persona por ID
    public Persona findPersona(Long id);
}
