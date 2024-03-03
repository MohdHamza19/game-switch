import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AdvertService } from '@ui-widgets/services'

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrl: './adverts.component.scss'
})
export class AdvertsComponent {
  @ViewChildren('arrow') arrows!: QueryList<ElementRef>;
  @ViewChild('searchInput') search!: ElementRef;

  cards: Array<any> = [];
  games: any;
  inputSubject: Subject<string> = new Subject();
  loadingGames: boolean = false;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private advertService: AdvertService
  ) { }

  ngOnInit() {
    this.advertService.getAllAdverts().subscribe((data: any) => {
      this.cards = data;
    });

    this.inputSubject.pipe(
      debounceTime(300),
      // distinctUntilChanged(),
      switchMap(value => this.advertService.getGameBySearch(value))
    ).subscribe({
      next: data => this.handleSearchResults(data),
      error: error => this.handleError(error)
    });
  }

  handleSearchResults(data: any) {
    this.loadingGames = false;
    this.games = data.length === 0 ? [{ title: "No games found" }] : data;
  }
  
  handleError(error: any) {
    this.loadingGames = false;
    this.games = [{ title: "An error occurred" }];
  }

  ngAfterViewInit() {
    this.arrows.forEach(arrow => {
      arrow.nativeElement.addEventListener('click', () => {
        arrow.nativeElement.classList.toggle('rotate');
      });
    });

    // this.search.nativeElement.classList.add('search__box');

    //removes the rotate class when the user clicks outside of the dropdown
    this.renderer.listen('document', 'click', (event) => {
      if (!this.arrows.some(arrow => arrow.nativeElement.contains(event.target))) {
        this.arrows.forEach(arrow => {
          arrow.nativeElement.classList.remove('rotate');
        });
      }
    });
  }

  viewAdvert(id: number) {
    this.advertService.getAdvertById(id).subscribe((data: any) => {
      this.router.navigate(['/ad', id], { state: { data } });
    });
  }

  onInputFocus(event: any) {
    if (event.target.value.length >= 1 && event.target.value.length <= 5) {
      this.loadingGames = false;
      this.games = [{ title: "Enter at least 5 characters" }];
      this.search.nativeElement.classList.add('search__box');
    } else if (event.target.value.length > 5) {
      this.loadingGames = true;
      this.games = [];
      this.inputSubject.next(event.target.value);
      this.search.nativeElement.classList.add('search__box');
      this.search.nativeElement.classList.add('list--pointer');
    }
  }

  onInputBlur() {
    this.search.nativeElement.classList.remove('search__box');
  }
}
