import { CalendarEvent } from 'angular-calendar';

export class MyEvent {
  id: string;
  title: string;
  hexColor: string;
  repeatPlan: string;
  calendarEvents: CalendarEvent[];

  constructor() {
    this.id = '_' + Math.random().toString(36).substr(2, 9); // Generate a random UNIQUE key
    this.calendarEvents = [];
    this.title = '';
    this.hexColor = '#ccc';
    this.repeatPlan = '';
  }
}