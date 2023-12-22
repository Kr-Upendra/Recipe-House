import { useState } from "react";
import TrendingBox from "../components/TrendingBox";

export default function Hero() {
  const [showTrends, setShowTrends] = useState(false);

  return (
    <div className="hero">
      <div className="hero__search">
        <p className="hero__search--label">
          Search top flavors from all over the globe that is loved by people
        </p>
        <div className="hero__search--inputbox">
          <input
            type="text"
            placeholder="Search Flavors..."
            className="el-input hero__search--inputbox-input"
            onFocus={() => setShowTrends(true)}
            onBlur={() => setShowTrends(false)}
          />
          <span className="el-search-icon material-symbols-outlined">
            search
          </span>
        </div>
        {showTrends && <TrendingBox />}
      </div>
    </div>
  );
}
