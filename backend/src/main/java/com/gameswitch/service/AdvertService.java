package com.gameswitch.service;

import com.gameswitch.dto.AdvertAllDto;
import com.gameswitch.dto.FilterAdvertDto;
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

  public List<AdvertAllDto> filterAdverts(FilterAdvertDto filters) {
    return advertRepository.filterAdverts(filters.getTitle(), filters.getPlatform(), filters.getLocation());
  }
}

//@Query("""
//      select new com.gameswitch.dto.AdvertAllDto(a.id, a.title, a.image, a.description, a.location, a.platform, a.condition, a.openToSale, a.includesBox, a.playableOn)
//      from Advert a
//      where a.title like %:searchText%
//      and (:platform = '' or a.platform = :platform)
//      and (:location = '' or a.location = :location)
//      """)
//List<AdvertAllDto> findAllAdvertsDtoBySearchTextAndFilters(String searchText, String platform, String location);
