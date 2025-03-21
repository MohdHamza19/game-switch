package com.gameswitch.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name = "advert")
public class Advert {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  @Column(name = "title", nullable = false, length = 30)
  private String title;

  @Column(name = "image", columnDefinition = "TEXT", nullable = true)
  private String image;

  @Column(name = "description", nullable = false, length = 500)
  private String description;

  @Column(name = "location", nullable = false, length = 50)
  private String location;

  @Enumerated(EnumType.STRING)
  @Column(name = "platform", nullable = false)
  private Platform platform;

  @Enumerated(EnumType.STRING)
  @Column(name = "disk_condition", nullable = false)
  private Condition condition;

  @Enumerated(EnumType.STRING)
  @Column(name = "open_to_sale", nullable = false)
  private Sale openToSale;

  @Enumerated(EnumType.STRING)
  @Column(name = "includes_box", nullable = false)
  private BoxInclude includesBox;

  @Column(name = "playable_on", nullable = false, length = 15)
  private String playableOn;

  public enum Platform {
    PlayStation,
    Xbox
  }

  public enum Condition {
    Working,
    Good,
    Excellent
  }
  public enum Sale {
    Yes,
    No
  }

  public enum BoxInclude {
    Yes,
    No
  }
}
