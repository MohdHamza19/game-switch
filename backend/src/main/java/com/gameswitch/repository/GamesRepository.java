package com.gameswitch.repository;

import com.gameswitch.entity.GamesPS4;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GamesRepository extends JpaRepository<GamesPS4, Integer> {
  @Query("""
      select new com.gameswitch.entity.GamesPS4(a.id, a.title)
      from GamesPS4 a
      where a.title like %:searchText%
      """)
  List<GamesPS4> findAllGamesBySearchText(String searchText, Pageable pageable);
}
