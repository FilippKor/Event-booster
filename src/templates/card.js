export default function markUpEvents(events) {
  const markUp = events
    .map(
      event => {
        const imgUrl = event.images[2]?.url || '';
        const artist = event.name || 'No name avaible';
        const date = event.dates.start.localDate || 'Unknown Date';
        const location = event._embedded?.venues[0].name || 'Unknown Location';
        const eventUrl = event.url || '#';

        return `
      <li class="cards__item" data-id="${event.id}">
          <img src="${imgUrl}" alt="${artist}" class="cards__img" />
          <h4 class="cards__event">${artist}</h4>
          <p class="cards__date">${date}</p>
          <a href="${eventUrl}" target="_blank" rel="noopener noreferrer" class="cards__location">
          <svg class="cards__icon" xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
              <path d="M3.5 0C1.57011 0 0 1.55933 0 3.47595C0 5.88495 3.50344 10 3.50344 10C3.50344 10 7 5.76648 7 3.47595C7 1.55933 5.42995 0 3.5 0ZM4.55602 4.49371C4.26484 4.78284 3.88245 4.92743 3.5 4.92743C3.11761 4.92743 2.7351 4.78284 2.44404 4.49371C1.86173 3.91547 1.86173 2.97455 2.44404 2.39624C2.72601 2.11609 3.10108 1.96179 3.5 1.96179C3.89892 1.96179 4.27393 2.11615 4.55602 2.39624C5.13833 2.97455 5.13833 3.91547 4.55602 4.49371Z" fill="white"/>
          </svg>
          ${location}
        </a>
      </li>
    `});

  return markUp.join('');
}
