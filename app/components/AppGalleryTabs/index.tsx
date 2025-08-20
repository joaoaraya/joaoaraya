"use client";

import { useState } from "react";
import OpenMediaModal from "../buttons/OpenMediaModal";
import "./style.scss";


type Props = {
    gallery: {
        mobile?: string[];
        desktop?: string[];
    };
    galleryPath: string;
};

type Tab = {
    id: "mobile" | "desktop";
    title: string;
    images?: string[];
};


export default function AppGalleryTabs({ gallery, galleryPath }: Props) {
    const tabs: Tab[] = [
        gallery.mobile && { id: "mobile", title: "Mobile", images: gallery.mobile },
        gallery.desktop && { id: "desktop", title: "Desktop", images: gallery.desktop },
    ].filter(Boolean) as Tab[];

    const [activeTab, setActiveTab] = useState<Tab["id"] | undefined>(tabs[0]?.id);

    if (tabs.length === 0) return null;

    const currentTab = tabs.find(tab => tab.id === activeTab);

    return (
        <div className="appGalleryTabs">
            <div id="menu">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`tabButton ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <p>{tab.title}</p>
                    </button>
                ))}
            </div>

            <div id="gallery">
                {currentTab?.images?.map((image, index) => (
                    <OpenMediaModal
                        key={index}
                        type="image"
                        imagePath={galleryPath + image}
                    />
                ))}
            </div>
        </div>
    );
}
