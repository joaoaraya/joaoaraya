import { MouseEventHandler, ReactNode } from 'react';

import Icon from '../../Icon';
import './style.scss';


type ModalProps = {
    children: ReactNode;
    closeButton: MouseEventHandler;
}


export default function MediaModal(props: ModalProps) {

    return (
        <>
            <div className="modalBG" />

            <div className="modal">
                <div className="modalContainer ">
                    <div className="modalHeader">
                        <button onClick={props.closeButton}>
                            <Icon name="close" />
                        </button>
                    </div>

                    <div className="modalMain">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}