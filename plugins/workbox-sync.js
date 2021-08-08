const backgroundSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('formQueue', {
    maxRetentionTime: 24 * 60 // Retry until 24 Hours reached
});

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com\/users/,
  new workbox.strategies.NetworkOnly({
    plugins: [backgroundSyncPlugin]
  }),
  'POST'
);
