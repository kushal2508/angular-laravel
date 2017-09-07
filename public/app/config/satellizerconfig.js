app.config('$authProvider', function($authProvider) {

	$authProvider.facebook({
      clientId: 'Facebook App ID',
      responseType: 'token'
    });

    $authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      clientId: 'Foursquare Client ID',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });
});