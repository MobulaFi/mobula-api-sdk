import { Mobula } from './src/apiWrapper_2';

const mobula = new Mobula('your_api_key');

mobula
  .fetchWalletHistoryBalance({
    wallet: '0x77A89C51f106D6cD547542a3A83FE73cB4459135',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
