import React, { Component } from 'react';

const axios = require("axios");

class CoinTrack extends Component {

  async componentWillMount() {
    await this.getCompAPYData()
  }

  getCompAPYData = () => {
    //getting ccurencies data
    axios({
      "method": "GET",
      "url": "https://api.compound.finance/api/v2/ctoken"
    }).then((results) => {
      results.data.cToken.forEach(cToken => {
        const supplyRate = cToken.supply_rate.value * 100;
        const compRate = +cToken.comp_supply_apy.value;
        console.log(`Supply APY for, ${cToken.underlying_symbol}: ${supplyRate}%`);
        console.log(`COMP Supply APY for ${cToken.underlying_symbol}: ${compRate}%`);
        console.log(`Total Supply APY for ${cToken.underlying_symbol}: ${compRate + supplyRate}%`);
        console.log('_______');
      })
    })
  }

  render() {
    return (
      <div>
        Hello here!
        <div>
          {() => {
            axios({
              "method": "GET",
              "url": "https://api.compound.finance/api/v2/ctoken"
            }).then((results) => {
              results.data.cToken.forEach(cToken => {
                const supplyRate = cToken.supply_rate.value * 100;
                <p>{supplyRate}</p>
              })
            })
          }
          }
        </div>
      </div>
    );
  }
}

export default CoinTrack;