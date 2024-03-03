package com.gameswitch.controller;

import com.gameswitch.dto.AdvertAllDto;
import com.gameswitch.entity.Advert;
import com.gameswitch.service.AdvertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/advert")
public class AdvertController {

  @Autowired
  private AdvertService advertService;

  @GetMapping("/all")
  public List<AdvertAllDto> getAllAdvertsDto() {
    return advertService.getAllAdvertsDto();
  }

  @GetMapping("/all-detailed")
  public List<Advert> getAllAdverts() {
    return advertService.getAllAdverts();
  }

  @GetMapping("/{id}")
  public Advert getAdvertById(@PathVariable int id) {
    return advertService.getAdvertById(id);
  }
}
