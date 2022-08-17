package com.portfolioenfr.portfolioenrfr.Repository;

import com.portfolioenfr.portfolioenrfr.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author aweir
 */
@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long>{
    
}
