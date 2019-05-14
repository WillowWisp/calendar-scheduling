import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEventAction, CalendarEvent } from 'angular-calendar';
import { subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, addWeeks, addMonths, addYears } from 'date-fns';

import { MyEvent } from '../../models/myEvent';

@Component({
  selector: 'app-create-calendar-event-modal',
  templateUrl: './create-calendar-event-modal.component.html',
  styleUrls: ['./create-calendar-event-modal.component.css']
})
export class CreateCalendarEventModalComponent implements OnInit {
  dayList: Date[] = [new Date()];
  currentEvent: MyEvent = new MyEvent();

  @Output() change: EventEmitter<MyEvent> = new EventEmitter<MyEvent>();

  actions: CalendarEventAction[] = [
    // {
    //   label: '<i class="fa fa-fw fa-pencil"></i>',
    //   onClick: ({ event }: { event: CalendarEvent }): void => {
    //     // this.handleEvent('Edited', event);
    //   }
    // },
    // {
    //   label: '<i class="fa fa-fw fa-times"></i>',
    //   onClick: ({ event }: { event: CalendarEvent }): void => {
    //     // this.events = this.events.filter(iEvent => iEvent !== event); // Delete
    //     // this.handleEvent('Deleted', event);
    //   }
    // }
  ];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  increaseNumberOfDays = () => {
    this.dayList.push(new Date());
  }

  removeDayByIndex = (item: Date) => {
    const index = this.dayList.indexOf(item);
    this.dayList.splice(index, 1);
  }

  saveEvent = () => {
    if (this.currentEvent.title === '' || this.currentEvent.repeatPlan === '') {
      console.error('Lỗi chưa nhập đủ field.');
      return;
    }

    this.dayList.forEach((item) => {
      for (let i = 0; i < 500; i++) {
        let dateToAdd = new Date(item);

        switch(this.currentEvent.repeatPlan) {
          case 'daily':
            dateToAdd = addDays(item, i);
            break;
          case 'weekly':
            dateToAdd = addWeeks(item, i);
            break;
          case 'monthly':
            dateToAdd = addMonths(item, i);
            break;
          case 'annually':
            dateToAdd = addYears(item, i);
            break;
          default:
            return;
        }

        this.currentEvent.calendarEvents.push({
          id: this.currentEvent.id,
          start: dateToAdd,
          title: this.currentEvent.title,
          color: { primary: this.currentEvent.hexColor, secondary: '#FAE3E3' },
          actions: this.actions,
          allDay: false,
          resizable: {
            beforeStart: false,
            afterEnd: false
          },
          draggable: false
        });
      }
    });

    this.change.emit(this.currentEvent);
    this.currentEvent = new MyEvent();

    this.activeModal.dismiss();
  }
}
