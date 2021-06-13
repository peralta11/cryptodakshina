import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(CampaignFactory.abi, '0x678Cf1921a37899B3cd303A6a12d4bd67a80aCE8');

export default instance;