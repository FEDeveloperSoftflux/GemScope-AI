import React from 'react';
import WhatsHot from './WhatsHot';
import EnterpriseUpgrade from './Enterprise';

const RightSidebar = ({ hotTokens, onUpgradeClick }) => (
  <div className="space-y-6">
    <WhatsHot hotTokens={hotTokens} />
    <EnterpriseUpgrade onUpgradeClick={onUpgradeClick} />
  </div>
);

export default RightSidebar;