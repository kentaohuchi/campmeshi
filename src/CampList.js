import * as React from 'react';
import Camp from './Camp';
import CampSerchMain from './CampSerchMain'

  function CampList() {
    return (
      <div style={{justifyContent:'center'}}>
        <Camp/>
        <CampSerchMain/>
      </div>
    );
  }

  export default CampList;