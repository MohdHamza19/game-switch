package com.gameswitch.dto;

import com.gameswitch.entity.Advert;
import lombok.*;

import java.util.Objects;

@Data
@AllArgsConstructor
public class AdvertAllDto {
  private int id;
  private String title;
  private Advert.Condition condition;
  private String location;

  //equals and hashcode
  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    AdvertAllDto that = (AdvertAllDto) o;
    return id == that.id && title.equals(that.title);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, title);
  }
}
