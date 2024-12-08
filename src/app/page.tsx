import GearUpCategories from "./components/gearUpCategories";
import BestOfAir from "./components/bestOfAir";
import Dontmiss from "./components/dontmiss";
import Essinial from "./components/essintial";
import Featured from "./components/featured";
import GearUp from "./components/gearUp";
import Hero from "./components/hero";



export default function Home() {
  return (
    <div>
<Hero/>
<BestOfAir/>
<Featured/>
<GearUp/>
<Dontmiss/>
<Essinial/>
<GearUpCategories/>
    </div>
  );
}
