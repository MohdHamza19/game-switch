package com.gameswitch.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Data
@Getter
@Setter
@Table(name = "advert")
public class Advert {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

  @Column(name = "user_id", nullable = false)
  private int userId;

  @Column(name = "title", nullable = false, length = 30)
  private String title;

  @Column(name = "description", nullable = false, length = 500)
  private String description;

  @Column(name = "location", nullable = false, length = 50)
  private String location;

  @Enumerated(EnumType.STRING)
  @Column(name = "platform", nullable = false)
  private Platform platform;

  @Enumerated(EnumType.STRING)
  @Column(name = "condition", nullable = false)
  private Condition condition;

  @Enumerated(EnumType.STRING)
  @Column(name = "includes_box", nullable = false)
  private BoxInclude includesBox;

  @Column(name = "playable_on", nullable = false, length = 15)
  private String playableOn;

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id", referencedColumnName = "id", insertable = false, updatable = false)
  private User user;
  public enum Platform {
    PlayStation,
    Xbox
  }

  public enum Condition {
    Working,
    Good,
    Excellent
  }

  public enum BoxInclude {
    Yes,
    No
  }
}
