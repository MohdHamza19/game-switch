package com.gameswitch.repository;

import com.gameswitch.dto.AdvertAllDto;
import com.gameswitch.entity.Advert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdvertRepository extends JpaRepository<Advert, Integer> {
  @Query("""
      select new com.gameswitch.dto.AdvertAllDto(a.id, a.title, a.image, a.description, a.location, a.platform, a.condition, a.openToSale, a.includesBox, a.playableOn)
      from Advert a
      """)
  List<AdvertAllDto> findAllAdvertsDto();

  @Query("""
      select new com.gameswitch.dto.AdvertAllDto(a.id, a.title, a.image, a.description, a.location, a.platform, a.condition, a.openToSale, a.includesBox, a.playableOn)
      from Advert a
      where (:title is null or a.title like %:title%)
      and (:platform is null or a.platform = :platform)
      and (:location is null or a.location like %:location%)
      """)
  List<AdvertAllDto> filterAdverts(@Param("title") String title, @Param("platform") Advert.Platform platform, @Param("location") String location);

}
