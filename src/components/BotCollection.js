import React from "react";

function BotCollection({filterBots}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {filterBots}
      </div>
    </div>
  );
}

export default BotCollection;
