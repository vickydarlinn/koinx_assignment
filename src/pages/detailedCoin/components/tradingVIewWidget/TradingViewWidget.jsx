// TradingViewWidget.jsx
import { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BINANCE:BTCUSDT",
          "timezone": "Asia/Kolkata",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "gridColor": "rgba(255, 255, 255, 0.06)",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "range": "1M",
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container "
      ref={container}
      style={{ height: "100%", width: "100%", border: "none" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
    </div>
  );
}

export default memo(TradingViewWidget);
