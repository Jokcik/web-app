import {Component} from '@nestjs/common';

@Component()
export class RatingService {

  public getRating(levelCompetition: number, placeCompetition: number) {
    return levelCompetition * placeCompetition;
  }
}
