import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

library.add(faAngleLeft);

export default function BackComponent() {
  return (
    <div>
      <FontAwesomeIcon icon={'angle-left'} />
    </div>
  );
}
