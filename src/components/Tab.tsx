
import React, { ReactElement, ReactNode, useState } from 'react';
import './Tabs.css';
// src/components/TabPane.tsx

export type TabPaneProps = {
  tabKey: string;
  title: string;
  children: ReactNode;
};


export const TabPane: React.FC<TabPaneProps> = ({ children }) => {
  return <>{children}</>;
};

type TabPaneElement = ReactElement<TabPaneProps>;
type TabsProps = {
  children: ReactNode;
  defaultActiveKey?: string;
};

export const Tabs: React.FC<TabsProps> = ({ children, defaultActiveKey }) => {
  
  const panes = React.Children.toArray(children) as TabPaneElement[];

  
  const keys = panes.map(p => p.props.tabKey);
 const initialKey =
    defaultActiveKey && keys.includes(defaultActiveKey)
      ? defaultActiveKey
      : keys[0];

  const [activeKey, setActiveKey] = useState(initialKey);

  return (
    <div className="tabs" role="tablist">
      <div className="tab-list">
        {panes.map(pane => (
          <button
            key={pane.props.tabKey}
            role="tab"
            aria-selected={pane.props.tabKey === activeKey}
            className={
              pane.props.tabKey === activeKey ? 'tab-button active' : 'tab-button'
            }
            onClick={() => setActiveKey(pane.props.tabKey)}
          >
            {pane.props.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {panes.map(pane =>
          pane.props.tabKey === activeKey ? (
            <div key={pane.props.tabKey} role="tabpanel">
              {pane.props.children}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
export default Tabs;

