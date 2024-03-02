package com.gameswitch.repository;

import com.gameswitch.dto.AdvertAllDto;
import com.gameswitch.entity.Advert;
import lombok.NonNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdvertRepository extends JpaRepository<Advert, Long> {
  @Query(value = "SELECT a.id, a.title FROM advert a", nativeQuery = true)
  List<AdvertAllDto> findAllAdvertsDto();
}
