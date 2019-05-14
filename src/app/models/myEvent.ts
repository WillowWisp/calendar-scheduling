import { CalendarEvent } from 'angular-calendar';

export class MyEvent {
  id: string;
  title: string;
  repeatPlan: string;
  calendarEvents: CalendarEvent[];

  constructor() {
    this.id = '_' + Math.random().toString(36).substr(2, 9); // Generate a random UNIQUE key
    this.calendarEvents = [];
  }
}