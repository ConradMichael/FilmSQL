package com.spring.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.application.model.FilmDataModel;

@Repository
public interface FilmRepository extends JpaRepository<FilmDataModel,Integer>{

}
