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
          <div class="grid-item list_name"><b>Quantity</b></div>
          <div class="grid-item">Joe IPA</div>
          <div class="grid-item">10 Barrel</div>
          <div class="grid-item">6.9%</div>
          <div class="grid-item">$7.00</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Bad Apple</div>
          <div class="grid-item">2 Towns</div>
          <div class="grid-item">10.5%</div>
          <div class="grid-item">$6</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Pacific Pineapple</div>
          <div class="grid-item">2 Towns</div>
          <div class="grid-item">5%</div>
          <div class="grid-item">$6.50</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Made Marion</div>
          <div class="grid-item">Yazoo</div>
          <div class="grid-item">4.9%</div>
          <div class="grid-item">$5</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Gold Beach Lager</div>
          <div class="grid-item">Arch Rock</div>
          <div class="grid-item">5.1%</div>
          <div class="grid-item">$5</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Premium Lager</div>
          <div class="grid-item">Alaskan</div>
          <div class="grid-item">6.9%</div>
          <div class="grid-item">$6</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Wanderlust</div>
          <div class="grid-item">Terrapin</div>
          <div class="grid-item">4%</div>
          <div class="grid-item">$4.50</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Bramble Berry</div>
          <div class="grid-item">Hood River</div>
          <div class="grid-item">6.6%</div>
          <div class="grid-item">$7</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Cream Ale</div>
          <div class="grid-item">PDX Lager</div>
          <div class="grid-item">4%</div>
          <div class="grid-item">$5.50</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Czech-Style Pilsner</div>
          <div class="grid-item">Linfizig</div>
          <div class="grid-item">9.1%</div>
          <div class="grid-item">$9</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Joe IPA</div>
          <div class="grid-item">10 Barrel</div>
          <div class="grid-item">6.9%</div>
          <div class="grid-item">$7</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Bad Apple</div>
          <div class="grid-item">2 Towns</div>
          <div class="grid-item">10.5%</div>
          <div class="grid-item">$6</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Pacific Pineapple</div>
          <div class="grid-item">2 Towns</div>
          <div class="grid-item">5%</div>
          <div class="grid-item">$6.50</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Made Marion</div>
          <div class="grid-item">Yazoo</div>
          <div class="grid-item">4.9%</div>
          <div class="grid-item">$5</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Gold Beach Lager</div>
          <div class="grid-item">Arch Rock</div>
          <div class="grid-item">5.1%</div>
          <div class="grid-item">$5</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Premium Lager</div>
          <div class="grid-item">Alaskan</div>
          <div class="grid-item">6.9%</div>
          <div class="grid-item">$6</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Wanderlust</div>
          <div class="grid-item">Terrapin</div>
          <div class="grid-item">4%</div>
          <div class="grid-item">$4.50</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Bramble Berry</div>
          <div class="grid-item">Hood River</div>
          <div class="grid-item">6.6%</div>
          <div class="grid-item">$7</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Cream Ale</div>
          <div class="grid-item">PDX Lager</div>
          <div class="grid-item">4%</div>
          <div class="grid-item">$5.50</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Czech-Style Pilsner</div>
          <div class="grid-item">Linfizig</div>
          <div class="grid-item">9.1%</div>
          <div class="grid-item">$9</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Gold Beach Lager</div>
          <div class="grid-item">Arch Rock</div>
          <div class="grid-item">5.1%</div>
          <div class="grid-item">$5</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Premium Lager</div>
          <div class="grid-item">Alaskan</div>
          <div class="grid-item">6.9%</div>
          <div class="grid-item">$6</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Wanderlust</div>
          <div class="grid-item">Terrapin</div>
          <div class="grid-item">4%</div>
          <div class="grid-item">$4.50</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Bramble Berry</div>
          <div class="grid-item">Hood River</div>
          <div class="grid-item">6.6%</div>
          <div class="grid-item">$7</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Cream Ale</div>
          <div class="grid-item">PDX Lager</div>
          <div class="grid-item">4%</div>
          <div class="grid-item">$5.50</div>
          <div class="grid-item list_name"></div>
          <div class="grid-item">Czech-Style Pilsner</div>
          <div class="grid-item">Linfizig</div>
          <div class="grid-item">9.1%</div>
          <div class="grid-item">$9</div>
          <div class="grid-item list_name"></div>
        </div>
      </div>
    </div>
  );
}

export default Beer;
