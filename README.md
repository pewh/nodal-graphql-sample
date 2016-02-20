# A Nodal Application for Testing

1. Bootstrap nodal data `nodal db:boostrap`
2. Run it `nodal s`. And your app should now be running on [localhost:3000](http://localhost:3000/).
3. Request access token to logout by `DELETE /v1/access_tokens` and it will return `501 - Not Implemented`