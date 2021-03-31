// export const BACKEND_HOST = 'http://143.248.232.156:8000';

export const WS_ENDPOINT = () => {
  const location = window.location;

  let protocol = 'ws://';

  if (location.protocol === 'https:') {
    protocol = 'wss://';
  }

  const endpoint = protocol + 'www.ask2live.me:8443/ws';

  return endpoint;
}