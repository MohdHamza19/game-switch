package com.gameswitch.controller;

import com.gameswitch.entity.GamesPS4;
import com.gameswitch.service.GamesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/games")
@CrossOrigin(origins = "http://localhost:4200")
public class GamesDataController {

  @Autowired
  private GamesService gamesService;

  @GetMapping("/ps4")
  public List<GamesPS4> getAllPs4Games() {
    return gamesService.getAllPs4Games();
  }

  @GetMapping("/ps4/{title}")
  public List<GamesPS4> getAllPs4GamesBySearch(@PathVariable String title) {
//    add a 5 second delay before return
    try {
      Thread.sleep(1000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }

    return gamesService.getAllPs4GamesByText(title);
  }

}
