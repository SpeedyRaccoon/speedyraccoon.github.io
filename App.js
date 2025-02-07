//import React from 'react';
import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Workspace from './Workspace';
import Form from './Form';
import Sustainibility from './Sustainibility';
import Directory from './Directory';
import Portfolio from './Portfolio';
import Process from './Process';
import Plans from './Plans';
import Homes from './Homes';
import Avalon from './Avalon';
import Crestview from './Crestview';
import Riverside from './Riverside';
import Che from './profiles/che';
import Chek from './profiles/Chek';
import Betty from './profiles/Betty';
import Alfonso from './profiles/Alfonso';
import Ivan from './profiles/Ivan';
import Kevin from './profiles/Kevin';
import Ally from './profiles/Ally';
import Footer from './footer';
import ContactUs from './ContactUs';
import MorningGlory from './morningGlory';
import LibraryPlan from './LibraryPlan';
import LotusPlan from './lotusPlan';
import SunflowerPlan from './sunflowerPlan';
import RoseBudPlan from './roseBudPlan';
import AduPlanBenefits from './aduPlanBenefits';
import Phase1PermittingAndPlanning from './Phase1PermittingAndPlanning';
import Phase2Construction from './phase2Construction';
import PartnerCustomers from './partnerCustomers';
import PartnerContractors from './partnerContractors';
import SmartHome from './smartHome';

import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div id="navigation">
          <Link to="/"></Link>
          <Link to="/contact"></Link>
          <Link to="/about"></Link>
          <Link to="/workspace"></Link>
          <Link to="/form"></Link>
          <Link to="/sustainibility"></Link>
          <Link to="/directory"></Link>
          <Link to="/portfolio"></Link>
          <Link to="/process"></Link>
          <Link to="/plans"></Link>
          <Link to="/homes"></Link>
          <Link to="/directory/tang"></Link>
          <Link to="/directory/tang_che_k"></Link>
          <Link to="/directory/tang_betty"></Link>
          <Link to="/directory/barajas"></Link>
          <Link to="/directory/tai"></Link>
          <Link to="/directory/tang_kevin"></Link>
          <Link to="/directory/voo_ally"></Link>
          <Link to="/morning_glory"></Link>
          <Link to="/lotus"></Link>
          <Link to="/sunflower"></Link>
          <Link to="/footer"></Link>
          <Link to="/contactUs"></Link>
          <Link to="/morningGlory"></Link>
          <Link to="/LibraryPlan"></Link>
          <Link to="/lotusPlan"></Link>
          <Link to="/sunflowerPlan"></Link>
          <Link to="/roseBudPlan"></Link>
          <Link to="/aduPlanBenefits"></Link>
          <Link to="/phase1PermittingAndPlanning"></Link>
          <Link to="/phase2Construction"></Link>
          <Link to="/partnerCustomers"></Link>
          <Link to="/partnerContractors"></Link>
          <Link to="/smartHome"></Link>
        </div>
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/workspace" element={<Workspace />}/>
            <Route path="/form" element={<Form />}/>
            <Route path="/sustainibility" element={<Sustainibility />}/>
            <Route path="/directory" element={<Directory />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/process" element={<Process />}/>
            <Route path="/plans" element={<Plans />}/>
            <Route path="/homes" element={<Homes />}/>
            <Route path="/directory/tang" element={<Che />}/>
            <Route path="/directory/tang_che_k" element={<Chek />}/> 
            <Route path="/directory/tang_betty" element={<Betty />}/>
            <Route path="/directory/barajas" element={<Alfonso />}/>
            <Route path="/directory/tai" element={<Ivan/>}/>
            <Route path="/directory/tang_kevin" element={<Kevin />}/>
            <Route path="/directory/voo_ally" element={<Ally />}/>
            <Route path="/morning_glory" element={<Avalon />}/>
            <Route path="/lotus" element={<Crestview />}/>
            <Route path="/sunflower" element={<Riverside />}/>
            <Route path="/footer" element={<Footer />}/>
            <Route path="/contactUs" element={<ContactUs />}/>
            <Route path="/MorningGlory" element={<MorningGlory />}/>
            <Route path="/LibraryPlan" element={<LibraryPlan />}/>
            <Route path="/lotusPlan" element={<LotusPlan />}/>
            <Route path="/sunflowerPlan" element={<SunflowerPlan />}/>
            <Route path="/roseBudPlan" element={<RoseBudPlan />}/>
            <Route path="/aduPlanBenefits" element={<AduPlanBenefits />}/>
            <Route path="/phase1PermittingAndPlanning" element={<Phase1PermittingAndPlanning />}/>
            <Route path="/phase2Construction" element={<Phase2Construction />}/>
            <Route path="/partnerCustomers" element={<PartnerCustomers />}/>
            <Route path="/partnerContractors" element={<PartnerContractors />}/>
            <Route path="/smartHome" element={<SmartHome />}/>
            </Routes>
        </div>
    </Router>
  )
}

export default App;
