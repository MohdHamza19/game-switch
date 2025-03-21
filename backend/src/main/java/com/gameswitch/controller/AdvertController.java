package com.gameswitch.controller;

import com.gameswitch.dto.AdvertAllDto;
import com.gameswitch.dto.FilterAdvertDto;
import com.gameswitch.entity.Advert;
import com.gameswitch.repository.AdvertRepository;
import com.gameswitch.repository.UserRepository;
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

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private AdvertRepository advertRepository;

  @GetMapping("/all")
  public List<AdvertAllDto> getAllAdvertsDto() {
    try {
      Thread.sleep(2000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
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

  @PostMapping("/filter")
  public List<AdvertAllDto> filterAdverts(@RequestBody FilterAdvertDto filters) {
    System.out.println(advertService.filterAdverts(filters));
    return advertService.filterAdverts(filters);
  }

  @PostMapping("/post")
  public void postAdvert(@RequestBody AdvertAllDto advertAllDto) {
    System.out.println(advertAllDto);
    Advert advert = convertToAdvert(advertAllDto);
    advertRepository.save(advert);
  }

  private Advert convertToAdvert(AdvertAllDto advertAllDto) {
    Advert advert = new Advert();
    advert.setCondition(advertAllDto.getCondition());
    advert.setDescription(advertAllDto.getDescription());
    advert.setLocation(advertAllDto.getLocation());
    advert.setTitle(advertAllDto.getTitle());
    advert.setImage(advertAllDto.getImage());
    advert.setPlatform(advertAllDto.getPlatform());
    advert.setOpenToSale(advertAllDto.getOpenToSale());
    advert.setIncludesBox(advertAllDto.getIncludesBox());
    advert.setPlayableOn(advertAllDto.getPlayableOn());
    advert.setUser(userRepository.getReferenceById(2)); // user ID is 2 for now
    return advert;
  }
}
