package com.gameswitch.service;

import com.gameswitch.dto.AdvertAllDto;
import com.gameswitch.entity.Advert;
import com.gameswitch.repository.AdvertRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdvertService {

  @Autowired
  private AdvertRepository advertRepository;
  public List<Advert> getAllAdverts() {
    return advertRepository.findAll();
  }

  public List<AdvertAllDto> getAllAdvertsDto() {
    return advertRepository.findAllAdvertsDto();
  }

  public Advert getAdvertById(int id) {
    return advertRepository.findById(id).orElse(null);
  }
}
