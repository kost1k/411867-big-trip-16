import {renderTemplate, RenderPosition} from './render.js';
import {createMenuTemplate} from './view/menu-view.js';
import {createFilterTemplate} from './view/filter-view.js';
import {createSortTemplate} from './view/sort-view.js';
import {createEventCreateTemplate} from './view/event-create-view.js';
import {createEventEditTemplate} from './view/event-edit-view.js';
import {createEventTemplate} from './view/event-view.js';

const controlsElement = document.querySelector('.trip-controls');
const menuElement = controlsElement.querySelector('.trip-controls__navigation');
const filterElement = controlsElement.querySelector('.trip-controls__filters');

renderTemplate(menuElement, createMenuTemplate(), RenderPosition.BEFOREEND);
renderTemplate(filterElement, createFilterTemplate(), RenderPosition.BEFOREEND);

const EVENT_COUNT = 3;

const eventsElement = document.querySelector('.trip-events');
const eventsListElement = eventsElement.querySelector('.trip-events__list');

renderTemplate(eventsListElement, createSortTemplate(), RenderPosition.BEFOREBEGIN);
renderTemplate(eventsListElement, createEventCreateTemplate(), RenderPosition.BEFOREEND);
renderTemplate(eventsListElement, createEventEditTemplate(), RenderPosition.BEFOREEND);

for (let i = 0; i < EVENT_COUNT; i++) {
  renderTemplate(eventsListElement, createEventTemplate(), RenderPosition.BEFOREEND);
}
