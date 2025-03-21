package com.gameswitch.repository;

import com.gameswitch.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}

//@Repository
//public interface AdvertRepository extends JpaRepository<Advert, Integer> {
//  @Query("""
//      select new com.gameswitch.dto.AdvertAllDto(a.id, a.title, a.condition, a.location, a.description)
//      from Advert a
//      """)
//  List<AdvertAllDto> findAllAdvertsDto();
//}
