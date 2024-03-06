package com.gameswitch.repository;

import com.gameswitch.dto.AdvertAllDto;
import com.gameswitch.entity.Advert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdvertRepository extends JpaRepository<Advert, Integer> {
  @Query("""
      select new com.gameswitch.dto.AdvertAllDto(a.id, a.title, a.condition, a.location)
      from Advert a
      """)
  List<AdvertAllDto> findAllAdvertsDto();
}
