package com.gameswitch.controller;

import com.gameswitch.dto.AdvertAllDto;
import com.gameswitch.entity.Advert;
import com.gameswitch.service.AdvertService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/advert")
@CrossOrigin(origins = "http://localhost:4200")
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
