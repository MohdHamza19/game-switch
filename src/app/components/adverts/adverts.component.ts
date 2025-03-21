import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { AdvertService } from '@ui-widgets/services'
import { title } from 'process';

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

  isFilterCollapsed = false;
  isSearchInputFocused = false;
  selectedPlatform: string = '';
  searchInput: string = '';
  selectedLocation: string = '';
  
  platforms = [
    { name: 'All', value: '', icon: 'bi bi-controller' },
    { name: 'PlayStation', value: 'PlayStation', icon: 'bi bi-playstation' },
    { name: 'Xbox', value: 'Xbox', icon: 'bi bi-xbox' }
  ];
  
  locations = ['Bangalore', 'Hyderabad', 'Mumbai', 'Delhi', 'Chennai'];

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private advertService: AdvertService
  ) { }

  ngOnInit() {
    this.advertService.getAllAdverts().subscribe((data: any) => {
      this.cards = data;

      console.log(this.cards);
      
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
    this.isSearchInputFocused = true;
    if (event.target.value.length >= 1 && event.target.value.length <= 5) {
      this.loadingGames = false;
      this.games = [{ title: "Enter at least 5 characters" }];
    } else if (event.target.value.length > 5) {
      this.loadingGames = true;
      this.games = [];
      this.inputSubject.next(event.target.value);
    }
  }

  onInputBlur() {
    setTimeout(() => {
      this.isSearchInputFocused = false;
    }, 120);
  }

  toggleFilters() {
    if (window.innerWidth < 768) {
      this.isFilterCollapsed = !this.isFilterCollapsed;
    }    
  }

  selectPlatform(platform: string) {
    this.selectedPlatform = platform;
  }

  selectLocation(location: string) {
    this.selectedLocation = location;
    console.log('Selected location:', this.selectedLocation);
  }

  applyFilters() {
    const filters = {
      title: this.searchInput,
      platform: this.selectedPlatform,
      location: this.selectedLocation,
    };
    this.advertService.filterAdverts(filters).subscribe({
      next: (data: any) => {
        this.cards = data;
        console.log('Filtered results:', this.cards);
      },
      error: (error) => {
        console.error('Error filtering adverts:', error);
      }
    });
  }

  selectGame(game: any) {
    if(game.title !== "No games found" && game.title !== "Enter at least 5 characters") {
      this.games = [];
      this.searchInput = game.title;
    }
  }
}
