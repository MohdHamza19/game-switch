package com.gameswitch.dto;

import com.gameswitch.entity.Advert;
import lombok.*;

import java.util.Objects;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class AdvertAllDto {
  private int id;
  private String title;
  private String image;
  private String description;
  private String location;
  private Advert.Platform platform;
  private Advert.Condition condition;
  private Advert.Sale openToSale;
  private Advert.BoxInclude includesBox;
  private String playableOn;

  @Override
  public int hashCode() {
    return Objects.hash(title);
  }
}
