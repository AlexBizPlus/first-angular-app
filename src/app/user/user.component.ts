import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return './users/' + this.avatar;
  }

  /**  with signals
  /* avatar = input.required<string>();
  /* name = input.required<string>();
  /* select = output<string>();
  /* imagePath = computed(() => './users/' + this.avatar());
  /**/

  onSelectUser() {
    this.select.emit(this.id);
  }
}
