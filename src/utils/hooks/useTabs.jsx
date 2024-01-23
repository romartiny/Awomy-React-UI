import {useState} from 'react';

export function useTabs({tabs, initialTabId, onChange,}) {
    const [[selectedTabIndex, direction], setSelectedTab] = useState(() => {
        const indexOfInitialTab = tabs.findIndex((tab) => tab.id === initialTabId);
        return [indexOfInitialTab === -1 ? 0 : indexOfInitialTab, 0];
    });

    return {
        tabProps: {tabs, selectedTabIndex, onChange, setSelectedTab,},
        selectedTab: tabs[selectedTabIndex],
        contentProps: {direction, selectedTabIndex,},
    };
}
