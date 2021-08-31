import StatementApi from '../lib/statementApi.js';
import _ from 'lodash';

class UnsubscribeService {
  displayRecurringCharges() {
    let billStatement = {};
    let recurringCharges = {};

    _.forEach(StatementApi.getCharges(), (charge) => {
      console.log('Charge: ',charge)
      const name = charge.name;
      billStatement[name] = billStatement[name] || 0;
      billStatement[name] = charge.amount;
      billStatement["count"] =  0;
      billStatement["count"] += 1;
      console.log('bill stmt 1: ',billStatement);
    });

    _.forEach(billStatement, (chargeAmount, chargeQuantity) => {
      console.log('Bill stmt 2: ',billStatement)
      if (chargeQuantity > 1) {
        console.log('reccuring charges: ',recurringCharges)
        _.set(recurringCharges, chargeQuantity, chargeAmount);
      }
    });

    return recurringCharges;
  }
}

export default UnsubscribeService;
