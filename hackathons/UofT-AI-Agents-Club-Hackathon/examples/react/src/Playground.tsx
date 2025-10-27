import { JsonSigner } from '@cere-activity-sdk/signers';
import { ActivityEvent, EventSource } from '@cere-activity-sdk/events';
import { useMemo } from 'react';
import { NoOpCipher } from '@cere-activity-sdk/ciphers';

const APP_ID = '2106' // application uniq id
const DISPATCH_URL = 'https://compute-1.testnet.cere.network' // cluster dispatcher endpoint
const LISTEN_URL = 'https://ai-socket.stage.cere.io' // cluster listener endpoint
const DATA_SERVICE_PUBLIC_KEY = '0xb11934991c15140fdeeca5eee24943ead7768607a8c1481533d76d0df193df73' // data service public key


export const Playground = () => {

    const signer = useMemo(
        () =>
            new JsonSigner(
                {"encoded":"Q6Jpxoy4UIie2XhVoAKc3aTvxU+3xx4vReKrRtwi1vcAgAAAAQAAAAgAAADi8DWj0GyF3uH8d9+T1p+uWhgChu2HybU+mSJrioqjimp2bWrITxTlRp2jHKcHAzf8FbainLruKiTAzvyaevX2oPoT+sADbtBcWyhpx76p5wIcZqLUSSRBAakP+qhCukT5e3cDDUIplps+Y5HosaGNijEyzMhm/diXBNYxIxeGBfMNRjza9ZpnuBUVJBE2TspQbz8YnVXY6q3e2aKM","encoding":{"content":["pkcs8","ed25519"],"type":["scrypt","xsalsa20-poly1305"],"version":"3"},"address":"5Dp6Yh9jFQ7Qa4tWjnGGNDS58vyLyrwNQsCWXHAqq5VMgL34","meta":{}},
                {
                    "passphrase": "uoft25"
                }
            ),
        [],
    );
    const client = useMemo(() => {
        const cipher = new NoOpCipher()
        const client = new EventSource(signer, cipher, {
            appId: APP_ID,
            dispatchUrl: DISPATCH_URL,
            listenUrl: LISTEN_URL,
            dataServicePubKey: DATA_SERVICE_PUBLIC_KEY,
            appPubKey: '' // optional no needed
        });

        client.isReady().then(
          (ready) => {
            console.log('EventSource ready:', ready);
          },
          (error) => {
            console.error('EventSource error:', error);
          },
        );

        return client;
  }, []);

    client.addEventListener('engagement', ({ executionResults }) => {
    console.log('Engagement execution results:', executionResults);
  });

  const handleSendEvent = async () => {
      const eventName = 'TEST_EVENT' // your uniq engagement event name
      const payload = {
          prompt: 'Create Epic Galaxy image'
      } // payload is the expecting data that you want your engagement process.
      const event = new ActivityEvent(eventName, payload);

      await client.dispatchEvent(event);
      // once event triggers should get that info in your ROB engagement logs.
      alert('event dispatched successfully. Check your engagement logs');
  };

  return (
    <div>
      <h1>Activity SDK Playground</h1>
      <button onClick={handleSendEvent}>Send event</button>
    </div>
  );
};
