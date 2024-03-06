package com.gameswitch.service;

import com.gameswitch.entity.GamesPS4;
import com.gameswitch.repository.GamesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GamesService {

  @Autowired
  private GamesRepository gamesRepository;
  public List<GamesPS4> getAllPs4Games() {
    return gamesRepository.findAll();
  }

  Pageable pageable = PageRequest.of(0, 100);
  public List<GamesPS4> getAllPs4GamesByText(String searchText) {
    return gamesRepository.findAllGamesBySearchText(searchText, pageable);
  }

//  public List<AdvertAllDto> getAllAdvertsDto() {
//    return advertRepository.findAllAdvertsDto();
//  }
//
//  public Advert getAdvertById(int id) {
//    return advertRepository.findById(id).orElse(null);
//  }
}
