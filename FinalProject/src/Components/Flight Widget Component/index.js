import React from "react";
import css from "./flightwidget.module.css";

function FlightWidget() {
  return (
    <div>
      <iframe
        title="flight-widget"
        class={css.widget}
        src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=SearchWidget&locale=en-GB&market=GB&currency=GBP"
        width
      ></iframe>
    </div>
  );
}

export default FlightWidget;
