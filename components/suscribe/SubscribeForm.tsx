import { memberSubscriptions } from "@appConfig";
import { ConnectUser } from '../ConnectUser';

export default () => {
  // http://ciiserver.metodociimas.com:3003/ghost/api/canary/admin/members/625ffb8dc956250001663eb0/signin_urls/

  // The admin API client is the easiest way to use the API
  // const GhostAdminAPI = require('@tryghost/admin-api');
  // // Configure the client
  // const api = new GhostAdminAPI({
  //     url: 'http://ciiserver.metodociimas.com:3003/',
  //     // Admin API key goes here
  //     key: '623ca36ec956250001663e8e:2b908355d73ba49dd775d7b5465fe6a8df5c59ee253daab36dc58d7e64e62fd7',
  //     version: 'v3'
  // })
  // // Make an authenticated request
  // api.posts.add({title: 'Hello world'})
  //     .then((response: any) => console.log(response))
  //     .catch((error: any) => console.error(error))
  return (
    <>
      <button style={{ zIndex: 100 }} onClick={() => {  } }>Hacerte miembro</button>
    </>
  );
};