"use client";

import { useState, useEffect } from "react";
import "./style.scss";
import ProjectsList from "../ProjectsList";
import SkillsList from "../SkillsList";

export default function ContentTabs() {
    const tabs = [
        {
            id: 'tabProjects',
            title: 'Projects',
            content: <ProjectsList />
        }, {
            id: 'tabSkills',
            title: 'My Skills',
            content: <SkillsList />
        }
    ];

    const [activeTab, setActiveTab] = useState(tabs[0].id);

    // Set default selected tab menu
    useEffect(() => {
        setActiveTab(tabs[0].id);
    }, []);


    return (
        <div className="contentTabs">
            <div className="tabsMenu">
                {tabs.map((tab, index) =>
                    <button
                        key={index}
                        className={`tabButton ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <p>{tab.title}</p>
                    </button>
                )}
            </div>

            {tabs.map((tab, index) =>
                activeTab === tab.id && (
                    <div key={index} id={tab.id} className="tabContent">
                        {tab.content}
                    </div>
                )
            )}
        </div>
    );
}
