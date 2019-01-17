package com.spring.application.controller;

import java.time.LocalDate;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.application.exception.ResourceNotFoundException;
import com.spring.application.model.FilmDataModel;
import com.spring.application.repository.FilmRepository;

@RestController
@RequestMapping("/api")
public class FilmController {

	@Autowired
	FilmRepository myRepository;

	@CrossOrigin
	@GetMapping("/film/{filmId}")
	public FilmDataModel getFilmbyID(@PathVariable(value = "filmId")Integer film_id) {
		return myRepository.findById(film_id).orElseThrow(() -> new ResourceNotFoundException("GarageDataModel", "filmId", film_id));
	}

	@CrossOrigin
	@GetMapping("/films")
	public List<FilmDataModel> getAllFilms(){
		return myRepository.findAll();
	}

}
