'use client';

import { useState } from 'react';
import MediaModal from '../../Modals/MediaModal';
import './style.scss';


type Props = {
    type: string;
    imagePath: string;
    videoPath?: string;
}


export default function OpenMediaModal(props: Props) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className="gallery" id={props.type}>
                <img src={props.imagePath} alt="Screenshot" />
            </button>

            {showModal && (
                <MediaModal closeButton={() => setShowModal(false)}>
                    {props.type === 'video' && (
                        <iframe
                            width="560"
                            height="315"
                            src={props.videoPath}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        />
                    )}

                    {props.type === 'image' && (
                        <img src={props.imagePath} alt="Screenshot" />
                    )}
                </MediaModal>
            )}
        </>
    )
}
