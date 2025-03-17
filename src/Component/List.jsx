import { places } from '../Data/data.js';

import Place from './Place.jsx';

export default function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <Place place={place}  />
    </li>
  ));
  return <ul>{listItems}</ul>;
}
