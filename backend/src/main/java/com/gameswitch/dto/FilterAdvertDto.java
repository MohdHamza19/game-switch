package com.gameswitch.dto;


import com.gameswitch.entity.Advert;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class FilterAdvertDto {
  private String title;
  private Advert.Platform platform;
  private String location;
}
