import React from "react";
import { Link } from 'react-router-dom';

function Beer() {
  return (
    <div>
      <div class="beer-box">
        <h3>Kegs on tap</h3>
        <div class="grid-container">
          <div class="grid-item list_name"><b>Beer</b></div>
          <div class="grid-item list_name"><b>Brewery</b></div>
          <div class="grid-item list_name"><b>Alcohol</b></div>
          <div class="grid-item list_name"><b>Price</b></div>
          <div class="grid-item">Joe IPA</div>
          <div class="grid-item">10 Barrel</div>
          <div class="grid-item">6.9%</div>
          <div class="grid-item">$7</div>
          <div class="grid-item">Bad Apple</div>
          <div class="grid-item">Pacific Pineapple</div>
          <div class="grid-item">Made Marion</div>
          <div class="grid-item">Gold Beach Lager</div>
          <div class="grid-item">Premium Lager</div>
          <div class="grid-item">Wanderlust</div>
          <div class="grid-item">Bramble Berry</div>
          <div class="grid-item">Cream Ale</div>
          <div class="grid-item">Czech-Style Pilsner</div>
        </div>
      </div>
    </div>
  );
}

export default Beer;
