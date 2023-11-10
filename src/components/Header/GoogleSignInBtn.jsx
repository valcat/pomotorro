import {useEffect} from 'react';

export default function GoogleSignInBtn() {

  /*
  function handleCallbackResponse(response) {
  console.log('info is ----- ', response.credentials);
  };

  useEffect(() => {
    /global google
    google.accounts.id.initialize({
      client_id: '319987877195-kepcvdbtsmcgucj8ohbr1c2k22tft47b.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('google-sign-in-btn'),
      { theme: 'outline', size: 'large'}
    )
  }, []);
*/
  return (
    <div>
      <div id="g_id_onload"
           data-client_id="16313022696-uovegnopad1mj5qo5gqcq6a1oll17kmu.apps.googleusercontent.com"
           data-context="signin"
           data-ux_mode="popup"
           data-callback="function handleCallbackResponse(response) {   console.log('info is: ', response.credentials);   };"
           data-itp_support="true">
      </div>

      <div className="g_id_signin"
           data-type="standard"
           data-shape="rectangular"
           data-theme="outline"
           data-text="signin_with"
           data-size="large"
           data-logo_alignment="left">
      </div>

    </div>
  )
}
