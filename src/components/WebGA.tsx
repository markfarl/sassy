import React from 'react';
import {useEffect, useState} from 'react';
import {useConfig} from '../contexts/configContext';
import {WebView} from 'react-native-webview';

const WebGA = ({eventSelect, callback}: any) => {
  const {config}: any = useConfig();
  const [gaIsLoaded, setGaIsLoaded] = useState(false);

  const fetchGA = `
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.googletagmanager.com/gtag/js?id=${config.gaId}';
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${config.gaId}', {send_page_view: false});
    `;

  useEffect(() => {
    if (eventSelect) {
      if (!gaIsLoaded) {
        console.log(`init GA with ${config.gaId}`);
        this.webref.injectJavaScript(fetchGA);
        setGaIsLoaded(true);
      }
      console.log(`Post Event with ${eventSelect}`);
      this.webref.injectJavaScript(
        `gtag('event', '${eventSelect}', {
          'event_category': 'general',
          'event_label': '${eventSelect}',
          'value': 0
        });`,
      );
    }
  }, [eventSelect, fetchGA, gaIsLoaded, config.gaId]);

  return (
    <WebView
      ref={r => (this.webref = r)}
      scalesPageToFit={false}
      mixedContentMode="compatibility"
      onMessage={callback}
      webviewDebuggingEnabled={true}
      source={{uri: 'https://blank.org/'}}
    />
  );
};

export default WebGA;
